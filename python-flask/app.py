import imghdr
import os
import time
from flask import Flask, render_template, request, redirect, url_for, abort, \
    send_from_directory
from werkzeug.utils import secure_filename

from azure.cognitiveservices.speech import AudioDataStream, SpeechConfig, SpeechSynthesizer, SpeechSynthesisOutputFormat
from azure.cognitiveservices.speech.audio import AudioOutputConfig
key = "45af936cd5f54c8790ba15d2950766bc"
endpoint = "https://analisistextohack.cognitiveservices.azure.com/"

from azure.ai.textanalytics import TextAnalyticsClient
from azure.core.credentials import AzureKeyCredential

import pydot
import os

documents=[' ']

listapalabras=[' ']


speech_config = SpeechConfig(subscription="546da9a0b95d4b29a806c1c7d8d147bc", region="southcentralus")
audio_config = AudioOutputConfig(filename="file.wav")

app = Flask(__name__,template_folder="templates")
app.config['MAX_CONTENT_LENGTH'] = 2 * 1024 * 1024
app.config['UPLOAD_EXTENSIONS'] = ['.txt']
app.config['UPLOAD_PATH'] = 'uploads'


def leerfichero():
    global documents
    archivo = open("uploads/archivo.txt", "r") 
    documents[0] = archivo.read() 
    documents[0] = documents[0].rstrip('\n')

def authenticate_client():
    ta_credential = AzureKeyCredential(key)
    text_analytics_client = TextAnalyticsClient(
            endpoint=endpoint, 
            credential=ta_credential)
    return text_analytics_client

def entity_linking_example(client):

    try:
        global documents
        result = client.recognize_linked_entities(documents = documents)[0]

        print("Linked Entities:\n")
        for entity in result.entities:
            print("\tName: ", entity.name, "\tId: ", entity.data_source_entity_id, "\tUrl: ", entity.url,
            "\n\tData Source: ", entity.data_source)
            print("\tMatches:")
            for match in entity.matches:
                print("\t\tText:", match.text)
                print("\t\tConfidence Score: {0:.2f}".format(match.confidence_score))
                #print("\t\tOffset: {}".format(match.offset))
                #print("\t\tLength: {}".format(match.length))
            
    except Exception as err:
        print("Encountered exception. {}".format(err))

def key_phrase_extraction_example(client):

    try:
        global documents
        response = client.extract_key_phrases(documents = documents)[0]

        if not response.is_error:
            print("Key Phrases:")
            global listapalabras
            listapalabras=response.key_phrases
            for phrase in response.key_phrases:
                print(phrase)
        else:
            print(response.id, response.error)

    except Exception as err:
        print("Encountered exception. {}".format(err))

def ordenar_palabras():
    global listapalabras
    global documents
    listanumeros=[(None,None)]*(len(listapalabras)-1)
    for i in range(0, len(listapalabras)-1):
        listanumeros[i]=documents[0].find(listapalabras[i]),listapalabras[i]
    
    listanumeros.sort()
    print(listanumeros)
    listapalabras = [x[1] for x in listanumeros] 
    #listapalabras[i]=listanumeros[0]

def create_graph():

    global documents
    global listapalabras
    graph = pydot.Dot(graph_type="digraph", rankdir="UD")
    root = listapalabras[0]
    
    
    for i in range(0, len(listapalabras)-1):
        posicion_ini=documents[0].find(listapalabras[i])
        posicion_fin=documents[0].find(listapalabras[i+1])
        lugar_punto=documents[0].find(".",posicion_ini,posicion_fin)
        
        if(-1==documents[0].find(".",posicion_ini,posicion_fin)):
            edge = pydot.Edge(listapalabras[i], listapalabras[i+1], label=documents[0][posicion_ini+len(listapalabras[i]):posicion_fin])
            graph.add_edge(edge)
        else:
            edge = pydot.Edge(root, listapalabras[i+1], label=documents[0][lugar_punto:posicion_fin])
            graph.add_edge(edge)            
    print(graph.to_string())
    graph.write_png("Hello.png")

def generaraudio():
    archivo = open("uploads/archivo.txt", "r") 
    documentos = archivo.read()
    documentos = documentos.rstrip('\n')
    synthesizer = SpeechSynthesizer(speech_config=speech_config, audio_config=audio_config)
    synthesizer.speak_text_async(documentos)

def generarmapa():
    client = authenticate_client()
    leerfichero()
    key_phrase_extraction_example(client)
    #entity_linking_example(client)
    ordenar_palabras()
    create_graph()

@app.errorhandler(413)
def too_large(e):
    return "File is too large", 413

@app.route('/')
def index():
    files = os.listdir(app.config['UPLOAD_PATH'])
    return render_template('pages/index.html', files=files)

@app.route('/uploader', methods=['POST'])
def upload_files():
    uploaded_file = request.files['file']
    filename = secure_filename(uploaded_file.filename)
    print("123")
    if filename != '':
        print("entroif")
        file_ext = os.path.splitext(filename)[1]
        if file_ext not in app.config['UPLOAD_EXTENSIONS']:
            print("entro2if")
            return "Invalid image", 400
        uploaded_file.save(os.path.join(app.config['UPLOAD_PATH'], "archivo.txt"))
    generaraudio()
    generarmapa()
    return '', 204

@app.route('/uploads/archivo.txt')
def upload(filename):
    return send_from_directory(app.config['UPLOAD_PATH'], "archivo.txt")
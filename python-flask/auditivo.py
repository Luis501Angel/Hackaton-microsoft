from azure.cognitiveservices.speech import AudioDataStream, SpeechConfig, SpeechSynthesizer, SpeechSynthesisOutputFormat
from azure.cognitiveservices.speech.audio import AudioOutputConfig

speech_config = SpeechConfig(subscription="546da9a0b95d4b29a806c1c7d8d147bc", region="southcentralus")
audio_config = AudioOutputConfig(filename="file.wav")

archivo = open("archivo.txt", "r") 
documents = archivo.read()
documents = documents.rstrip('\n')


synthesizer = SpeechSynthesizer(speech_config=speech_config, audio_config=audio_config)
synthesizer.speak_text_async(documents)
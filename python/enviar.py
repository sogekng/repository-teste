import email
import yagmail

nome = 'Paulo'

emailServer = yagmail.SMTP('pguto5@gmail.com', 'euamoskate')

emailServer.send(nome, subject = 'Feliz aniversário', contents = f'Olá {nome}! Feliz aniversário!')
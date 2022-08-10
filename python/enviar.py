import json
import pandas as pd
import yagmail

with open('clientes.json', 'r', encoding='utf-8') as openfile: 
        dic = json.load(openfile)

tabela = pd.DataFrame(dic)

print(tabela)
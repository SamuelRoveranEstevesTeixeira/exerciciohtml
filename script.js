const url ="https://api.hgbrasil.com/weather?format=json-cors&key=c578b9aa"

acessarAPI()


async function acessarAPI(){

    const resultado = await fetch(url)
    const dados_json = await resultado.json()

    let descricao_tempo = dados_json['results']['description']
    let cidade = dados_json['results']['city']
    let temperatura_tempo = dados_json['results']['temp']
    let umidade_ar = dados_json['results']['humidity']
    let data = dados_json['results']['date']
    let hora = dados_json['results']['time']
    let vento = dados_json['results']['wind_speedy']


    span_cidade.innerText = cidade
    span_descricao.innerText = descricao_tempo
    span_temperatura.innerText = temperatura_tempo
    span_umidade.innerText = umidade_ar
    span_data.innerText = data
    span_hora.innerText = hora
    span_vento.innerText = vento

    let descricao_tempo_1 = dados_json['results']['forecast'][1]['description']
    let temperatura_min_1 = dados_json['results']['forecast'][1]['min']
    let temperatura_max_1 = dados_json['results']['forecast'][1]['max']
    let umidade_ar_1 = dados_json['results']['forecast'][1]['humidity']
    let data_1 = dados_json['results']['forecast'][1]['date']
    let vento_1 = dados_json['results']['forecast'][1]['wind_speedy']

    span_descricao_1.innerText = descricao_tempo
    span_temperatura_min_1.innerText = temperatura_min_1
    span_temperatura_max_1.innerText = temperatura_max_1
    span_umidade_1.innerText = umidade_ar
    span_data_1.innerText = data
    span_vento_1.innerText = vento

    let descricao_tempo_2 = dados_json['results']['forecast'][2]['description']
    let temperatura_min_2 = dados_json['results']['forecast'][2]['min']
    let temperatura_max_2 = dados_json['results']['forecast'][2]['max']
    let umidade_ar_2 = dados_json['results']['forecast'][2]['humidity']
    let data_2 = dados_json['results']['forecast'][2]['date']
    let vento_2 = dados_json['results']['forecast'][2]['wind_speedy']

    span_descricao_2.innerText = descricao_tempo
    span_temperatura_min_2.innerText = temperatura_min_2
    span_temperatura_max_2.innerText = temperatura_max_2
    span_umidade_2.innerText = umidade_ar
    span_data_2.innerText = data
    span_vento_2.innerText = vento


    

}
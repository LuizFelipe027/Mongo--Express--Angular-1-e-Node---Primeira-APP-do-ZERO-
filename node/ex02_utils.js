function upper(text){
    return text.toUpperCase()
}

module.exports = { upper } /*Para poder usar a função em outros arquivos. 
                            No outro arquivo através do comando require. 
                            Será a função passada aqui que é executada*/
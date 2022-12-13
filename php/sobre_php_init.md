

**Finalidade php.ini**

Essencialmente, é o arquivo de configuração da linguagem.

"O PHP tem suporte para arquivos de configuração INI por cada diretório. Esses arquivos são processados apenas pelo CGI/FastCGI SAPI. Essa funcionalidade torna obsoleta a extensão PECL htscanner. Se você estiver rodando o PHP como um módulo do Apache, use arquivos .htaccess para obter o mesmo efeito.

Além do arquivo php.ini principal, o PHP procura por arquivos INI em cada diretório, iniciando no diretório do arquivo PHP requisitado e continua o caminho até a raiz do documento atual (conforme definido na variável $_SERVER['DOCUMENT_ROOT']). Caso o arquivo PHP esteja fora da raiz do documento, apenas o seu diretório é procurado.

Somente configurações INI com os modos PHP_INI_PERDIR e PHP_INI_USER serão reconhecidos nos arquivos INI estilo .user.ini.

Duas novas diretivas INI, user_ini.filename e user_ini.cache_ttl controlam o uso de arquivos INI de usuário.

A diretiva user_ini.filename define o nome do arquivo que o PHP procura em cada diretório; se for definido como uma string vazia, o PHP não fará a varredura em tudo. O padrão é .user.ini.

A diretiva user_ini.cache_ttl controla a frequência de como os arquivos INI de usuário são relidos. O padrão é de 300 segundos (5 minutos)."

fonte: https://www.php.net/manual/pt_BR/configuration.file.per-user.phphttps://www.php.net/manual/pt_BR/configuration.file.per-user.php


**Localização no GNU/Linux Ubuntu**
/etc/php/8.1/apache2/php.ini

**Informações sobre delimitadores e mais**

Informação sobre as diretivas do php.ini podem ser obtidas na
documentação ofícial do PHP: https://www.php.net/manual/pt_BR/ini.php

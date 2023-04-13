# <h1>Progetto di Codifica di testi 22/23 </h1>
Il progetto è stato realizzato da Enrica Di Rado e Arianna Calloni per il corso di <b>Codifica di testi</b> del professor Angelo Mario Del Grosso, nell'anno accademico 2022-2023, all'interno del CdL di <b>Informatica Umanistica</b>.
### <h2>Comando per la validazione XML tramite Xerces</h2>
java -cp "xerces-2_12_2/*" dom.Counter -v diario_xml.xml
### <h2>Comando per la generazione del documento HTML di output tramite il processore XSLT Saxon </h2>
java -jar codifica/SaxonHE10-3J/saxon-he-10.3.jar -s:diario_xml.xml -xsl:diario_xslt.xsl -o:out.html

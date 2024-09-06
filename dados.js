let dados = [
    {
        nomeEquipe: "Mercedes",
        nomeCompletoEquipe: "Mercedes-AMG Petronas Formula One Team",
        sede: "Brackley, Reino Unido",
        chefeEquipe: "Chefe de Equipe: Toto Wolff",
        fundacao: "Fundação: 1954",
        titulosConstrutores: "Títulos de Construtores: 8",
        resumo: "A Mercedes-Benz começou na Fórmula 1 em 1954, saindo após 1955 e retornando como fornecedora de motores em 1994. Em 2010, a Mercedes comprou a Brawn GP, uma equipe formada pela antiga Honda Racing. A partir de 2014, dominou a era híbrida, conquistando múltiplos títulos consecutivos.",
        pilotosAtuais: ["Lewis Hamilton", "George Russell"]
    },
    {
        nomeEquipe: "Ferrari",
        nomeCompletoEquipe: "Scuderia Ferrari",
        sede: "Maranello, Itália",
        chefeEquipe: "Chefe de Equipe: Frédéric Vasseur",
        fundacao: "Fundação: 1929 (F1 desde 1950)",
        titulosConstrutores: "Títulos de Construtores: 16",
        resumo: "A Scuderia Ferrari é a equipe mais antiga e bem-sucedida da Fórmula 1. Fundada por Enzo Ferrari, a equipe participou de todas as temporadas desde 1950. Ao longo de sua história, a Ferrari tem sido sinônimo de tradição e sucesso, com 16 títulos de construtores e 15 títulos de pilotos.",
        pilotosAtuais: ["Charles Leclerc", "Carlos Sainz"]
    },
    {
        nomeEquipe: "Red Bull Racing",
        nomeCompletoEquipe: "Oracle Red Bull Racing",
        sede: "Milton Keynes, Reino Unido",
        chefeEquipe: "Chefe de Equipe: Christian Horner",
        fundacao: "Fundação: 2005",
        titulosConstrutores: "Títulos de Construtores: 6",
        resumo: "A Red Bull Racing nasceu após a compra da Jaguar Racing em 2004, que por sua vez sucedeu a Stewart Grand Prix. A equipe começou a se destacar em 2010, quando conquistou seu primeiro título de construtores. Desde então, se tornou uma das forças dominantes, especialmente com a ascensão de Max Verstappen.",
        pilotosAtuais: ["Max Verstappen", "Sergio Perez"]
    },
    {
        nomeEquipe: "McLaren",
        nomeCompletoEquipe: "McLaren F1 Team",
        sede: "Woking, Reino Unido",
        chefeEquipe: "Chefe de Equipe: Andrea Stella",
        fundacao: "Fundação: 1963",
        titulosConstrutores: "Títulos de Construtores: 8",
        resumo: "A McLaren foi fundada por Bruce McLaren em 1963. Durante os anos 1980 e 1990, a equipe se tornou uma potência, especialmente com pilotos como Ayrton Senna e Alain Prost. Embora tenha enfrentado altos e baixos nas últimas décadas, a McLaren continua sendo uma equipe histórica com múltiplos títulos.",
        pilotosAtuais: ["Lando Norris", "Oscar Piastri"]
    },
    {
        nomeEquipe: "Alpine",
        nomeCompletoEquipe: "BWT Alpine F1 Team",
        sede: "Enstone, Reino Unido",
        chefeEquipe: "Chefe de Equipe: Bruno Famin (Interino)",
        fundacao: "Fundação: 2021 (como Alpine, anteriormente Renault, Benetton e Toleman)",
        titulosConstrutores: "Títulos de Construtores: 2",
        resumo: "A Alpine F1 é a evolução da Renault F1 Team, que anteriormente era Benetton e, antes disso, Toleman. A equipe é responsável por 2 títulos de construtores e pilotos conquistados por Fernando Alonso em 2005 e 2006, com o nome Renault.",
        pilotosAtuais: ["Esteban Ocon", "Pierre Gasly"]
    },
    {
        nomeEquipe: "Haas",
        nomeCompletoEquipe: "Haas F1 Team",
        sede: "Kannapolis, Estados Unidos",
        chefeEquipe: "Chefe de Equipe: Guenther Steiner",
        fundacao: "Fundação: 2016",
        titulosConstrutores: "Títulos de Construtores: 0",
        resumo: "A Haas é uma equipe americana que estreou na Fórmula 1 em 2016. Fundada pelo empresário Gene Haas, a equipe é conhecida por sua abordagem de parceria técnica com a Ferrari, que fornece componentes e motores. A Haas é a primeira equipe americana a competir na F1 em várias décadas.",
        pilotosAtuais: ["Kevin Magnussen", "Nico Hülkenberg"]
    },
    {
        nomeEquipe: "Sauber (Alfa Romeo)",
        nomeCompletoEquipe: "Alfa Romeo F1 Team Stake",
        sede: "Hinwil, Suíça",
        chefeEquipe: "Chefe de Equipe: Alessandro Alunni Bravi",
        fundacao: "Fundação: 1993 (como Sauber)",
        titulosConstrutores: "Títulos de Construtores: 0",
        resumo: "A Sauber F1 Team foi fundada por Peter Sauber e estreou na Fórmula 1 em 1993. Em 2018, a equipe fez parceria com a Alfa Romeo, adotando o nome da marca italiana. A Sauber é conhecida por ser uma equipe intermediária, fornecendo plataforma para pilotos e engenheiros se destacarem no esporte.",
        pilotosAtuais: ["Valtteri Bottas", "Zhou Guanyu"]
    },
    {
        nomeEquipe: "Williams",
        nomeCompletoEquipe: "Williams Racing",
        sede: "Grove, Reino Unido",
        chefeEquipe: "Chefe de Equipe: James Vowles",
        fundacao: "Fundação: 1977",
        titulosConstrutores: "Títulos de Construtores: 9",
        resumo: "A Williams foi fundada por Sir Frank Williams e Patrick Head em 1977 e rapidamente se tornou uma das equipes mais bem-sucedidas da história da Fórmula 1. A equipe conquistou 9 títulos de construtores e 7 títulos de pilotos, mas enfrentou dificuldades nas últimas décadas.",
        pilotosAtuais: ["Alexander Albon", "Logan Sargeant"]
    },
    {
        nomeEquipe: "Aston Martin",
        nomeCompletoEquipe: "Aston Martin Aramco Cognizant Formula One Team",
        sede: "Silverstone, Reino Unido",
        chefeEquipe: "Chefe de Equipe: Mike Krack",
        fundacao: "Fundação: 2021 (anteriormente Racing Point, Force India e Jordan Grand Prix)",
        titulosConstrutores: "Títulos de Construtores: 0",
        resumo: "A Aston Martin retornou à Fórmula 1 em 2021, assumindo o controle da Racing Point, que anteriormente era Force India e Jordan Grand Prix. A equipe busca reviver o prestígio da marca britânica no automobilismo, com ambições de competir com as equipes de ponta.",
        pilotosAtuais: ["Fernando Alonso", "Lance Stroll"]
    },
    {
        nomeEquipe: "RB",
        nomeCompletoEquipe: "Visa Cash App RB Formula One Team",
        sede: "Faenza, Itália",
        chefeEquipe: "Chefe de Equipe: Franz Tost",
        fundacao: "Fundação: 2006 (como Toro Rosso, rebatizada como AlphaTauri em 2020, agora RB em 2024)",
        titulosConstrutores: "Títulos de Construtores: 0",
        resumo: "Originalmente fundada como Scuderia Toro Rosso em 2006 após a compra da Minardi pela Red Bull, a equipe foi rebatizada como AlphaTauri em 2020 para promover a marca de moda da Red Bull. Em 2024, passou a se chamar Visa Cash App RB Formula One Team. Ao longo de sua história, a equipe tem sido usada como plataforma de desenvolvimento para jovens talentos da Red Bull, incluindo o campeão mundial Sebastian Vettel, que venceu com a equipe em 2008 no GP da Itália.",
        pilotosAtuais: ["Yuki Tsunoda", "Liam Lawson"]
    }
];

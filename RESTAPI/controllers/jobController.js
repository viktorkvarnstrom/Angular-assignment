/*----- GET ALL JOBS ------*/
exports.getJobs = function(req, res) {
    let jobs = [
        { 
            title: 'Data Scientist', 
            location: 'Malmö', 
            category: 'Teknik', 
            description: 'Vill du utmanas och verkligen arbeta i hetluften? Bygga lösningar med den senaste tekniken som sedan tas i produktion? Är avancerad data-, bild- och textanalys eller prediktiv modellering din spets? Vill du tillhöra ett tight team där du kommer få lösa spännande utmaningar med komplexa modeller? Vill du vara en viktig del i den spännande resan med att fortsätta etablera Forefront i region Syd? Vi söker dig som vill bidra med ditt kunnande, men lika mycket med ditt engagemang och inspiration för att tillsammans bygga ett regionkontor där alla har kul på jobbet. Allt i en entreprenöriell miljö med driv och tillväxt.' 
        },
        { 
            title: 'Lösningsarkitekt', 
            location: 'Malmö', 
            category: 'Teknik', 
            description: 'Har du god förståelse för systemutvecklarens liksom verksamhetens utmaningar och vill arbeta i en dynamisk och innovativ miljö? Vill du vara en viktig del i den spännande resan med att fortsätta etablera Forefront i region Syd? Nu söker vi en lösningsarkitekt eller som precis som vi brinner för leverans och avtryck. Om du är lösningsorienterad och vågar utmana det uppenbara tror vi att du kommer att trivas hos oss. Vi söker dig som vill bidra med ditt kunnande, men lika mycket med ditt engagemang och inspiration för att tillsammans bygga ett regionkontor där alla har kul på jobbet. Allt i en entreprenöriell miljö med driv och tillväxt.' 
        },
        { 
            title: 'Senior .NET-utvecklare', 
            location: 'Halmstad, Malmö', 
            category: 'Teknik', 
            description: 'Älskar du att hitta lösningar som på riktigt överträffar kundernas förväntan? Brinner du för Software Craftmanship, TDD, SOLID och Clean Code? Vill du vara en viktig del i den spännande resan med att fortsätta etablera Forefront i Region Syd? Vi söker dig som vill bidra med ditt kunnande, men lika mycket med ditt engagemang och inspiration för att tillsammans bygga ett regionkontor där alla har kul på jobbet. Allt i en entreprenöriell miljö med driv och tillväxt' 
        },
        { 
            title: 'Regionchef Mitt', 
            location: 'Sundsvall', 
            category: 'Strategi & Verksamhet', 
            description: 'Är du en driven och passionerad ledare med god förmåga att sätta, motivera samt förmedla mål och vision till dina medarbetare? Brinner du för att utveckla dina team och dina affärsrelationer? Då kan du vara den vi söker!' 
        },
        { 
            title: 'Kravledare/Business Analyst', 
            location: 'Stockholm', 
            category: '', 
            description: 'Vill du utvecklas i din roll som kravledare/business analyst i en grupp med erfarna kraventusiaster samt med våra kunders mest spännande förändringsresor? Vi söker fler drivna kravledare och kravanalytiker som vill fortsätta resan framåt tillsammans med oss på Forefront.' 
        },
        { 
            title: 'Tech lead', 
            location: 'Stockholm', 
            category: 'Teknik', 
            description: 'Har du flera års erfarenhet av backend-utveckling och vill ta din roll och karriär till nästa steg? Stimuleras du av att arbeta agilt i spännande utvecklingsprojekt där du får möjlighet att vara med att styra ditt och ditt teams arbete? Har du ett brinnande intresse för teknik och innovation och vill tillsammans med våra kunder skapa framtidens tjänster? Då är du den vi söker!' 
        },
        { 
            title: '.NET-utvecklare', 
            location: 'Åre', 
            category: 'Teknik', 
            description: 'Forefronts inhouseorganisation arbetar med ny- och vidareutveckling av våra kunders system. Nu får vi in fler spännande kunder samtidigt som vi vill utöka vår position på marknaden. Stimuleras du av att arbeta agilt i en spännande organisation där du får möjlighet att arbeta i en modern teknisk miljö? Har du ett brinnande intresse för såväl det tekniska samt det kundnära perspektivet och vill arbeta tillsammans med likasinnade kollegor? Då är du den vi söker!' 
        }
    ];

    return res.status(200).json(jobs);
}



/*----- GET SINGLE JOB ------*/

exports.getJob = function(req, res) {
    let job =  { 
        title: '.NET-utvecklare', 
        location: 'Åre', 
        category: 'Teknik', 
        description: 'Forefronts inhouseorganisation arbetar med ny- och vidareutveckling av våra kunders system. Nu får vi in fler spännande kunder samtidigt som vi vill utöka vår position på marknaden. Stimuleras du av att arbeta agilt i en spännande organisation där du får möjlighet att arbeta i en modern teknisk miljö? Har du ett brinnande intresse för såväl det tekniska samt det kundnära perspektivet och vill arbeta tillsammans med likasinnade kollegor? Då är du den vi söker!' 
    };

    return res.status(200).json(job);
}
type World = "world" | "BBC" | "Sky";
type Hello = "Hello" | "Bonjour";
type Goodbye = "Goodbye" | "Au revoir";
type Greeting = Hello | Goodbye;

type Salutation = `${Greeting} ${World}`;

type domains = "sport" | "iplayer" | "news";
type allow_urls = `https://bbc.co.uk/${domains}`;

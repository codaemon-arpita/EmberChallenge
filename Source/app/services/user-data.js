import Service from '@ember/service';

export default Service.extend({
    heroHeader: {
        title: "Hello, world!",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat nisi ut est blandit, sed fermentum est maximus. Etiam volutpat sit amet sem vitae finibus. Aenean fermentum mattis velit tempor rutrum. Nulla vitae massa suscipit, hendrerit lacus a, placerat nisi."
    },
    redefiningWeb: {
        title: "Redefining the Web",
        path: "assets/images/layers.png",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    },
    ourTeam:{
        title: "Our team",
        subtitle: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        member: [
            {
                "name":"Riff Raff",
                "designation":"Founder",
                "path":"assets/images/riffraff.jpg",
                "about":"Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            },
            {
                "name":"2 Chainz",
                "designation":"Chief Technology Officer",
                "path":"assets/images/2chainz.jpeg",
                "about":"Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            },
            {
                "name":"Nene Leakes",
                "designation":"Director of Markerting",
                "path":"assets/images/nene.jpeg",
                "about":"Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            },
            {
                "name":"Miley Cirus",
                "designation":"Creative Director",
                "path":"assets/images/miley.jpg",
                "about":"Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            }
        ],
        logo: [
            {
                "path":"assets/images/logo-nike.svg",
                "name": "nike"
            },
            {
                "path":"assets/images/logo-ms.svg",
                "name": "microsoft"
            },
            {
                "path":"assets/images/logo-github.svg",
                "name": "github"
            }
        ]
    },
    services:{
        title: "Services",
        subtitle: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        names: [
            {
                "name":"Unique Layouts",
                "path":"assets/images/idea.svg",
                "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
            },
            {
                "name":"Responsive",
                "path":"assets/images/mobile-phone.svg",
                "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
            },
            {
                "name":"Ajax Transitions",
                "path":"assets/images/loading.svg",
                "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
            },
            {
                "name":"E-Commerce",
                "path":"assets/images/shopping-black-bag.svg",
                "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
            },
            {
                "name":"Unlimited Portfolios",
                "path":"assets/images/menu.svg",
                "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
            },
            {
                "name":"Powerful",
                "path":"assets/images/energy.svg",
                "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
            }
        ]
    }
});

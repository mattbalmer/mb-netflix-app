import events from '../events';

var data = {
    'mylist' : [
        {
            'title': 'Futurama',
            'id': 1,
            'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
        },
        {
            'title': 'The Interview',
            'id': 2,
            'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
        },
        {
            'title': 'Gilmore Girls',
            'id': 3,
            'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
        }
    ],
    'recommendations' : [
        {
            'title': 'Family Guy',
            'id': 4,
            'img': 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
        },
        {
            'title': 'The Croods',
            'id': 5,
            'img': 'http://cdn3.nflximg.net/webp/2353/3862353.webp'
        },
        {
            'title': 'Friends',
            'id': 6,
            'img': 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
        }
    ]
};

export default {
    init: () => {
        events.on('title.Add', (title) => {
            var exists = data.mylist.some((t) => t.id == title.id);
            if(exists) return;

            data.mylist.push(title);
            events.trigger('data.mylist', data.mylist);
        });

        events.on('title.Remove', (title) => {
            var titles = data.mylist;

            var index = titles.indexOf(title);
            titles.splice(index, 1);

            events.trigger('data.mylist', data.mylist);
        });
    },
    read: () => {
        return data;
    }
}
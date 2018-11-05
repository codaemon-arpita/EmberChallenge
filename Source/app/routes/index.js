import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    data: Ember.inject.service('user-data'),
    model(){
        return RSVP.hash({
            heroHeader: this.get('data').get('heroHeader'),
            redefiningWeb: this.get('data').get('redefiningWeb'),
            ourTeam: this.get('data').get('ourTeam'),
            services: this.get('data').get('services')
        });
    }
});

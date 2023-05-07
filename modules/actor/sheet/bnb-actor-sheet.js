export default class BnBActorSheet extends ActorSheet {
    get template() {
        return `systems/bunnies-and-burrows-3e/templates/actor/bnb-${this.actor.type}-sheet.hbs`
    }
}
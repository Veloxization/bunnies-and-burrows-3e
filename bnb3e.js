import BnBActorSheet from "./modules/actor/sheet/bnb-actor-sheet.js";

Hooks.once("init", function() {
    console.log("BnB3e | Initializing Bunnies and Burrows 3e System")

    Actors.unregisterSheet("core", ActorSheet)
    Actors.registerSheet(
        game.system.id,
        BnBActorSheet,
        { label: game.i18n.localize("BNB.Sheets.CharacterSheet"), types: ["character"], makeDefault: true })
});
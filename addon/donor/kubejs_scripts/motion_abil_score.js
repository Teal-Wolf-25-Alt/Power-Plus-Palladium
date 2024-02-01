(function () {
    let ClientboundSetEntityMotionPacket = Java.loadClass('net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket');

    StartupEvents.registry('palladium:abilities', (event) => {
        event.create('donor:motion_abil_score')
            .icon(palladium.createItemIcon('palladium:vibranium_circuit'))
            .addProperty("score_value", "string", "Jump.Score", "Scoreboard Name")
            .addProperty("division_amount", "string", "1", "Amount score will be divided")

            .tick((entity, entry, holder, enabled) => {
                if (enabled) {
					const division_amount = entry.getPropertyByName('division_amount');
                    let username = entity.getGameProfile().getName();
                    let scoreboard = Utils.server.scoreboard;
                    let scoreboard_obj = scoreboard.getObjective(entry.getPropertyByName("score_value"));
                    let score = scoreboard.getOrCreatePlayerScore(username, scoreboard_obj);
                    let value = score.getScore();
                    let move = entity.getLookAngle().scale(value / division_amount);
                    entity.setDeltaMovement(move);

                    if (entity.isPlayer()) {
                        entity.connection.send(new ClientboundSetEntityMotionPacket(entity));
                    }
                }
            });
    });
})();
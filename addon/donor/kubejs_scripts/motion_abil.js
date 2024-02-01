let ClientboundSetEntityMotionPacket = Java.loadClass('net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket');

StartupEvents.registry('palladium:abilities', (event) => {
  event.create('heroes:motion_abil')
    .icon(palladium.createItemIcon('palladium:vibranium_circuit'))
    .addProperty("motion_scale", "float", 1.1, "Motion Scale")
    .tick((entity, entry, holder, enabled) => {
      if (enabled) {
        let motionscale = entry.getPropertyByName("motion_scale")
        let move = entity.getLookAngle().scale(motionscale);
        entity.setDeltaMovement(move);

        if (entity.isPlayer()) {
          entity.connection.send(new ClientboundSetEntityMotionPacket(entity));
        }
      }
    });
});
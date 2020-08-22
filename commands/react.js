try {
      var playingMessage = await queue.textChannel.send(`🎶 Started playing: **${song.title}** `);
      await playingMessage.react("⏭");
      await playingMessage.react("⏯");
      await playingMessage.react("🔁");
      await playingMessage.react("⏹");
    } catch (error) {
      console.error(error);
    }
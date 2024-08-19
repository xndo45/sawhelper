// utils/permissions.js
export const isAdminOrOwner = (interaction) => {
    const member = interaction.member;

    // Check if the user is the bot owner
    const botOwners = ['249895366793756672']; // Replace with your Discord user ID(s)
    if (botOwners.includes(member.user.id)) {
        return true;
    }

    // Check if the user has administrator permissions
    if (member.permissions.has('ADMINISTRATOR')) {
        return true;
    }

    return false;
};

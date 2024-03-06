class Menu extends Phaser.Scene{

    create ()
    {
        const bt_start = this.add.text(400, 300, 'Play Game', {
            fontFamily: 'Arial',
            fontSize: '32px',
            color: '#ffffff',
            align: 'center',
            fixedWidth: 260,
            backgroundColor: '#2d2d2d'
        }).setPadding(32).setOrigin(0.5);

        bt_start.setInteractive({ useHandCursor: true });

        bt_start.on('pointerdown', () => {
            bt_start.setBackgroundColor('#0000FF');
        });

        bt_start.on('pointerout', () => {
            bt_start.setBackgroundColor('#2d2d2d');
        });

        const bt_quit = this.add.text(400, 450, 'Quit', {
            fontFamily: 'Arial',
            fontSize: '32px',
            color: '#ffffff',
            align: 'center',
            fixedWidth: 260,
            backgroundColor: '#2d2d2d'
        }).setPadding(32).setOrigin(0.5);

        bt_quit.setInteractive({ useHandCursor: true });

        bt_quit.on('pointerdown', () => {
            bt_quit.setBackgroundColor('#0000FF');
        });

        bt_quit.on('pointerout', () => {
            bt_quit.setBackgroundColor('#2d2d2d');
        });

    }
}


export { Menu };
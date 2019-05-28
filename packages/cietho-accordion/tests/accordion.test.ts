describe('accordion', () => {
    test.todo('should have default options');
    test.todo('should be able to overwrite all options');
    test.todo('should be able to overwrite options partially');

    describe('functions and callbacks', () => {
        describe('open()', () => {
            test.todo('should open the targeted item');
            test.todo('should close open items if `allowMultipleOpen` is not allowed');
            test.todo('should not close open items if `allowMultipleOpen` is allowed');
        });

        describe('close()', () => {
            test.todo('should close the targeted item if `allowAllClosed` is allowed');
            test.todo('should not close the targeted item if `allowAllClosed` is not allowed');
        });

        describe('toggle()', () => {
            test.todo('should open the target if it was closed');
            test.todo('should close the target if it was opened and `allowAllClosed` is allowed');
        });

        describe('init()', () => {
            test.todo('should fire beforeInit() function');
            test.todo('should initialize an existing accordion instance');
            test.todo('should fire afterInit() function');
        });

        describe('destroy()', () => {
            test.todo('should fire beforeDestroy() function');
            test.todo('should destroy an instance');
            test.todo('should fire afterDestroy() function');
        });
    });

    describe('accessibility', () => {
        test.todo('should add necessary aria attributes if not already set');

        describe('keyboard events', () => {
            test.todo('should focus the next item on TAB or ARROW_DOWN');
            test.todo('should focus the previous item on SHIFT + TAB or ARROW_UP');
            test.todo('should focus the first item on HOME');
            test.todo('should focus the last item on END');
            test.todo('should open the selected item on ENTER or SPACE');
        });
    });
});

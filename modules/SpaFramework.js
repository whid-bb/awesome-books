class SpaFramework {
    constructor({ menuItem, contentBlock }) {
        if (this.validSelectorAll(menuItem, contentBlock)) {
            this.menuItems = this.getDOMall(menuItem)
            this.contentBlocks = this.getDOMall(contentBlock)
            this.createSpa()
        }
    }

    validSelectorAll = (menuItems, blocks) => {
        if (
            document.querySelectorAll(menuItems).length === 0 ||
            document.querySelectorAll(blocks).length === 0) {

            console.error(`"${menuItems}" or "${blocks}" does not exist!`)
            return false
        }
        return true
    }

    getDOMall = (selector) => {
        return document.querySelectorAll(selector)
    }

    createSpa() {
        const menuItemsArr = Array.from(this.menuItems)
        const contentBlocksArr = Array.from(this.contentBlocks)

        menuItemsArr.forEach((menuItem) => {
            menuItem.addEventListener('click', (e) => {
                contentBlocksArr.forEach((block) => {
                    block.classList.remove('active');
                });
                const showElementById = document.querySelector(
                    e.target.getAttribute('href'),
                );
                showElementById.classList.add('active');
            });
        });

    }
}

export { SpaFramework };
describe('Getter and Setter', () => {

    it('should can have getter and setter', () => {
        class Category {
            _name?: string;

            get name(): string {
                if (this._name) {
                    return this._name;
                } else {
                    return "empty";
                }
            }

            set name(value: string) {
                if (value !== "") {
                    this._name = value;
                }
            }
        }

        const category: Category = new Category();
        console.info(category.name);

        category.name = "Mahmud";
        console.info(category.name);

        category.name = "";
        console.info(category.name);

    })
})
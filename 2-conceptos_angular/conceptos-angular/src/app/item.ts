export class Item {
  static nextId = 0;

  static items: Item[] = [
    new Item(
      null,
      'Tetera',
      'robusta'
    ),
    new Item(1, 'Lampara', 'brillante'),
    new Item(2, 'Telefono', 'delgado'),
    new Item(3, 'Television', 'de epoca'),
    new Item(4, 'Pecera')
  ];

  constructor(
    public id?: number,
    public name?: string,
    public feature?: string,
    public url?: string,
    public rate = 100,
  ) {
    this.id = id ? id : Item.nextId++;
  }

  clone(): Item {
    return Object.assign(new Item(), this);
  }
}

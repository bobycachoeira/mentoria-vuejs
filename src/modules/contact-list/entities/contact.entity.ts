export class Contact {
  public id: string;

  public name: string;

  public phone: string;

  constructor(contact: any = {}) {
    this.id = contact.id || this.generateUuid();
    this.name = contact.name;
    this.phone = contact.phone;
  }

  private generateUuid(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  get formatPhoneNumber() {
    return `(${this.phone.slice(0, 2)}) ${this.phone.slice(2, 7)}-${this.phone.slice(7, 11)}`;
  }
}

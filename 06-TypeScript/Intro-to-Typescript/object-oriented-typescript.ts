export {};

class Notification {
  // Instanzproperties bekommen direkt den Typen
  // readonly friert das Objekt nicht in der Laufzeit ein (also wenn JavaScript den Code ausführt)
  readonly recipient: string;
  message: string;
  sentAt?: Date;
  private delivered = false;

  constructor(recipient: string, message: string) {
    this.recipient = recipient;
    this.message = message;
  }

  preview(): string {
    return `To ${this.recipient}: ${this.message}`;
  }

  send(): void {
    console.log(`Sending: ${this.preview}`);
    this.delivered = true;
    this.sentAt = new Date();
  }

  isDelivered(): boolean {
    return this.delivered;
  }
}

const welcome = new Notification("ada@example.com", "Welcome!");
// welcome.send();
// console.log(welcome.isDelivered());
// console.log(welcome.preview());
// welcome.recipient = "abcd@example.com";
// console.log(welcome.preview());

class ApiKeyVault {
  #secret: string;

  constructor(secret: string) {
    this.#secret = secret;
  }

  matches(candidate: string): boolean {
    return candidate === this.#secret;
  }
}

const vault = new ApiKeyVault("passwort123");
console.log(vault.matches("passwort123"));
// #privateField gilt in der Laufzeit von JavaScript
// console.log(vault.#secret);

class EventRegistration {
  constructor(
    public readonly eventId: number,
    public attendeeName: string,
  ) {}
}

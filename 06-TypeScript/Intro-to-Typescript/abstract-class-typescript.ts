export {};

abstract class Notification {
  // zugänglich in Subklassen, aber nicht außerhalb
  protected sentAt?: Date;

  constructor(
    public readonly recipient: string,
    public message: string,
  ) {}

  // Subklassen implentieren ihre eigene send()-Art
  abstract send(): void;

  log(): void {
    const status = this.sentAt?.toISOString() ?? "not sent";
    console.log(`${this.recipient}: ${status}`);
  }

  // gemeinsame Zustandsänderung kann in der Basisklasse gespeichert werden
  protected markAsSent(): void {
    this.sentAt = new Date();
  }
}

// extends erlaubt es unserer Subklasse die Methoden,
// den Zustand, Constructor zu erben
class EmailNotification extends Notification {
  override send(): void {
    console.log(`Email to ${this.recipient}: ${this.message}`);
    this.markAsSent();
  }
}
class SMSNotification extends Notification {
  override send(): void {
    console.log(`SMS to ${this.recipient}: ${this.message}`);
    this.markAsSent();
  }
}

const email = new EmailNotification("Thomas@example.com", "Welcome!");
const sms = new SMSNotification("+49123456789", "Your code 123456");

email.send();
email.log();

sms.send();
sms.log();

// console.log(email.sentAt);

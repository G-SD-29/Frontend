import { useState } from "react";

// TypeScript prüft, dass der Object-State diese beiden Properties behält.
type Profile = {
  name: string;
  age: number;
};

const ProfileEditor = () => {
  // Die Generics nennen TypeScript die erlaubten Werte über die gesamte Laufzeit.
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [profile, setProfile] = useState<Profile>({ name: "Ada", age: 36 });

  const handleBirthday = () => {
    // Wir erzeugen ein neues Objekt, statt profile.age direkt zu verändern.
    setProfile((currentProfile) => ({
      ...currentProfile,
      age: currentProfile.age + 1,
    }));
  };

  return (
    <section>
      <h3>Nullable und Object-State</h3>
      <p>
        {profile.name} ist {profile.age} Jahre alt.
      </p>
      <button type="button" onClick={handleBirthday}>
        Geburtstag
      </button>
      <button type="button" onClick={() => setSelectedName(profile.name)}>
        Profil auswählen
      </button>
      <p>
        {selectedName ? `Ausgewählt: ${selectedName}` : "Noch keine Auswahl"}
      </p>
    </section>
  );
};

export default ProfileEditor;

const Student = ({ student }) => {
  return (
    <article className="student-card">
      {/* article passt, weil die Card eine eigenständige Inhaltseinheit ist. */}
      {/* Das Bild kommt aus dem student-Objekt. */}
      <img
        className="student-card__image"
        src={student.picture}
        alt={`${student.firstName} ${student.lastName}`}
      />

      <div className="student-card__header">
        <p className="student-card__label">Student Profile</p>
        <h1>
          {/* JSX-Ausdrücke in {} lesen Werte aus JavaScript aus. */}
          {student.firstName} {student.lastName}
        </h1>
      </div>

      {/* dl/dt/dd passen gut für Label-Wert-Paare wie Age -> 42. */}
      <dl className="student-card__details">
        <div>
          <dt>ID</dt>
          {/* Für Zahlen brauchen wir ebenfalls {}, weil der Wert aus JavaScript kommt. */}
          <dd>{student.id}</dd>
        </div>

        <div>
          <dt>Age</dt>
          <dd>{student.age}</dd>
        </div>

        <div>
          <dt>Course</dt>
          <dd>{student.course}</dd>
        </div>

        <div>
          <dt>City</dt>
          <dd>{student.city}</dd>
        </div>
      </dl>
    </article>
  );
};

export default Student;

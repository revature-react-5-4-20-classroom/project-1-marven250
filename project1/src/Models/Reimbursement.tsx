export class Reimbursement {
  id; // primary key
  author; // foreign key -> User, not null
  amount; // not null
  datesubmitted; // not null
  dateresolved; // not null
  description; // not null
  resolver; // foreign key -> User
  status; // foreign ey -> ReimbursementStatus, not null
  rtype; // foreign key -> ReimbursementType

  constructor(
    id,
    author,
    amount,
    datesubmitted,
    dateresolved,
    description,
    resolver,
    status,
    rtype
  ) {
    this.id = id;
    this.author = author;
    this.amount = amount;
    this.dateresolved = dateresolved;
    this.datesubmitted = datesubmitted;
    this.description = description;
    this.resolver = resolver;
    this.status = status;
    this.rtype = rtype;
  }
}

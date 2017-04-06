export class Form {
  id: number;
  qmaDetails: QmaDetails;
}

export class QmaDetails {
  allocationNumber: string;
  expiryDate: Date;
  issuedDate: Date;
}
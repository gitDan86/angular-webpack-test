import { InMemoryDbService } from 'angular-in-memory-web-api';
import { FORMTYPE } from './form-type.enum';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let forms = [
            { 
                id: FORMTYPE.RPP2016, 
                qmaDetails: {
                    allocationNumber: "RP123",
                    expiryDate: new Date(),
                    issuedDate: new Date()
                } 
            },
            { 
                id: FORMTYPE.QMA2016,  
                qmaDetails: {
                    allocationNumber: "QMA456",
                    expiryDate: new Date(),
                    issuedDate: new Date()
                } 
            },
            { 
                id: FORMTYPE.QMAMR2016, 
                qmaDetails: {
                    allocationNumber: "QMAMR789",
                    expiryDate: new Date(),
                    issuedDate: new Date()
                } 
            }
        ];
        return {forms};
    }
}
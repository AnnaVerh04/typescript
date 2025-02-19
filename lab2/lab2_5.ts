import { NitrogenBase } from './lab2_3';
type Nucleotide = {
    base: NitrogenBase;
    sugar: string; 
    phosphateGroups: number; 
};

const nucleotide1: Nucleotide = {
    base: NitrogenBase.Adenine,
    sugar: "рибоза",
    phosphateGroups: 3,
};

const nucleotide2: Nucleotide = {
    base: NitrogenBase.Uracil,
    sugar: "рибоза",
    phosphateGroups: 2,
};

const nucleotide3: Nucleotide = {
    base: NitrogenBase.Guanine,
    sugar: "рибоза",
    phosphateGroups: 1,
};

const nucleotide1_json = JSON.stringify(nucleotide1)
console.log(nucleotide1_json);

const nucleotide2_json = JSON.stringify(nucleotide2)
console.log(nucleotide2_json);

const nucleotide3_json = JSON.stringify(nucleotide3)
console.log(nucleotide3_json);
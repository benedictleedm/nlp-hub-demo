const OntoNotesEntities: any = {
  "PER": {
    tooltip: "Person",
    color: "pink"
  },
  "LOC": {
    tooltip: "Location",
    color: "green"
  },
  "ORG": {
    tooltip: "Organization",
    color: "blue"
  },
  "MISC": {
    tooltip: "Miscellaneous",
    color: "gray"
  },
  "CARDINAL": {
    tooltip: "Cardinal Number",
    color: "orange"
  },
  "EVENT": {
    tooltip: "Event",
    color: "green"
  },
  "DATE": {
    tooltip: "Date",
    color: "fuchsia"
  },
  "FAC": {
    tooltip: "Facility",
    color: "cobalt"
  },
  "GPE": {
    tooltip: "Country/City/State",
    color: "teal"
  },
  "LANGUAGE": {
    tooltip: "Language",
    color: "red"
  },
  "LAW": {
    tooltip: "Law",
    color: "brown"
  },
  "MONEY": {
    tooltip: "Monetary Value",
    color: "orange"
  },
  "NORP": {
    tooltip: "Nationalities, Religious/Political Groups",
    color: "green"
  },
  "ORDINAL": {
    tooltip: "Ordinal Value",
    color: "orange"
  },
  "PERCENT": {
    tooltip: "Percentage",
    color: "orange"
  },
  "PRODUCT": {
    tooltip: "Product",
    color: "purple"
  },
  "QUANTITY": {
    tooltip: "Quantity",
    color: "orange"
  },
  "TIME": {
    tooltip: "Time",
    color: "fuchsia"
  },
  "WORK_OF_ART": {
    tooltip: "Work of Art/Media",
    color: "tan"
  },
}

const PyThaiNLPEntities: any = {
  "ZIP": {
    tooltip: "Zip Code",
    color: "green"
  },
  "LEN": {
    tooltip: "Length",
    color: "orange"
  },
  "URL": {
    tooltip: "URL",
    color: "black"
  },
  "EMAIL": {
    tooltip: "Email",
    color: "black"
  },
  "PHONE": {
    tooltip: "Phone Number",
    color: "orange"
  },
}

const entityLookup: any = {
  ...OntoNotesEntities,
  ...PyThaiNLPEntities,
}

export default entityLookup;

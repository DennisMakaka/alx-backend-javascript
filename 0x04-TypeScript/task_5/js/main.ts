// Interface defining the structure for MajorCredits
interface MajorCredits {
  credit: number; // Number of credits for a major subject
  _brand: "Major"; // Branding property to differentiate MajorCredits
}

// Interface defining the structure for MinorCredits
interface MinorCredits {
  credit: number; // Number of credits for a minor subject
  _brand: "Minor"; // Branding property to differentiate MinorCredits
}

// Function to sum two MajorCredits objects
function sumMajorCredits(
  subject1: MajorCredits, // First subject with major credits
  subject2: MajorCredits  // Second subject with major credits
): MajorCredits {
  // Calculate the sum of the credit values
  const sum = subject1.credit + subject2.credit;

  // Create a new object with the sum of credits and maintain the _brand for Major
  const obj: MajorCredits = {
    credit: sum,  // Sum of the two credit values
    _brand: "Major",  // Keep the "Major" branding to indicate the type
  };

  return obj; // Return the summed MajorCredits object
}

// Function to sum two MinorCredits objects
function sumMinorCredits(
  subject1: MinorCredits, // First subject with minor credits
  subject2: MinorCredits  // Second subject with minor credits
): MinorCredits {
  // Calculate the sum of the credit values
  const sum = subject1.credit + subject2.credit;

  // Create a new object with the sum of credits and maintain the _brand for Minor
  const obj: MinorCredits = {
    credit: sum,  // Sum of the two credit values
    _brand: "Minor",  // Keep the "Minor" branding to indicate the type
  };

  return obj; // Return the summed MinorCredits object
}


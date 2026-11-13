const curriculum = [
  {
    level: "JSS1",
    topics: [
      {
        id: "number-and-numeration", title: "Number and numeration", group: "Numbers",
        summary: "Place value, ordering, rounding and Roman numerals.",
        lesson: "Our number system uses ten digits (0–9) and place value. In 5,284, the 5 means 5,000, the 2 means 200, the 8 means 80 and the 4 means 4. We can write it in expanded form as 5,000 + 200 + 80 + 4.\n\nCompare whole numbers from the leftmost digit; the first place where the digits differ decides which number is greater. To round to a place, look at the digit immediately to its right: 5–9 rounds up, while 0–4 stays the same.\n\nRoman numerals use symbols I = 1, V = 5, X = 10, L = 50, C = 100, D = 500 and M = 1,000. A smaller symbol before a larger one is subtracted (IV = 4); after a larger one it is added (VI = 6).",
        example: ["Write 36,407 in expanded form and round it to the nearest thousand.", "36,407 = 30,000 + 6,000 + 400 + 7. The hundreds digit is 4, so the thousands digit stays 6: 36,000."],
        questions: [
          ["What is the value of 7 in 47,315?", "7,000", "The 7 is in the thousands place."],
          ["Write 8,092 in expanded form.", "8,000 + 90 + 2", "There are 8 thousands, 0 hundreds, 9 tens and 2 units."],
          ["Round 5,768 to the nearest hundred.", "5,800", "The tens digit is 6, so round the hundreds digit up."],
          ["Write 39 in Roman numerals.", "XXXIX", "30 is XXX and 9 is IX; combine them as XXXIX."]
        ]
      },
      {
        id: "whole-number-operations", title: "Whole-number operations", group: "Numbers",
        summary: "Addition, subtraction, multiplication, division and estimation.",
        lesson: "Use place-value columns to add and subtract accurately. Multiplication is repeated addition, while division shares a quantity into equal groups. In a calculation with brackets and several operations, work in this order: brackets, powers, multiplication or division from left to right, then addition or subtraction from left to right.\n\nEstimate first by rounding numbers to friendly values. An estimate helps you notice an answer that is unreasonable.",
        example: ["Evaluate 36 ÷ 4 + 3 × 5.", "Do division and multiplication first: 36 ÷ 4 = 9 and 3 × 5 = 15. Then 9 + 15 = 24."],
        questions: [
          ["Calculate 4,386 + 2,957.", "7,343", "Add by place value, carrying where a column totals 10 or more."],
          ["Calculate 9,000 − 3,685.", "5,315", "Subtract 3,685 from 9,000 using regrouping."],
          ["Calculate 27 × 14.", "378", "27 × (10 + 4) = 270 + 108 = 378."],
          ["Evaluate 48 ÷ 6 + 7 × 3.", "29", "Do division and multiplication first: 8 + 21 = 29."]
        ]
      },
      {
        id: "factors-and-multiples", title: "Factors, multiples, HCF and LCM", group: "Numbers",
        summary: "Divisibility, prime numbers, common factors and multiples.",
        lesson: "A factor divides a number exactly. A multiple is the result of multiplying a number by a whole number. A prime number has exactly two factors: 1 and itself. Prime factorisation expresses a number as a product of primes.\n\nThe highest common factor (HCF) is the largest factor shared by numbers. The lowest common multiple (LCM) is the smallest positive multiple shared by them. Listing factors or multiples works well for small numbers; prime factorisation is useful for larger ones.",
        example: ["Find the HCF and LCM of 12 and 18.", "12 = 2² × 3 and 18 = 2 × 3². HCF = 2 × 3 = 6; LCM = 2² × 3² = 36."],
        questions: [
          ["List all the factors of 18.", "1, 2, 3, 6, 9, 18", "These are the whole numbers that divide 18 with no remainder."],
          ["Is 29 prime or composite?", "Prime", "29 has only two factors: 1 and 29."],
          ["Find the HCF of 20 and 30.", "10", "The common factors are 1, 2, 5 and 10; the greatest is 10."],
          ["Find the LCM of 6 and 8.", "24", "The first common positive multiple in 6, 12, 18, 24… and 8, 16, 24… is 24."]
        ]
      },
      {
        id: "fractions", title: "Fractions", group: "Numbers",
        summary: "Equivalent fractions, comparison and the four operations.",
        lesson: "A fraction names equal parts of a whole. Its numerator counts the parts and its denominator names the size of the parts. Equivalent fractions have the same value; multiply or divide the numerator and denominator by the same non-zero number to create one.\n\nTo add or subtract fractions, first use a common denominator. To multiply, multiply numerators and denominators. To divide by a fraction, multiply by its reciprocal. Simplify the result by dividing numerator and denominator by their HCF.",
        example: ["Calculate 2/3 + 1/4.", "A common denominator is 12. 2/3 = 8/12 and 1/4 = 3/12, so the sum is 11/12."],
        questions: [
          ["Simplify 18/24.", "3/4", "Divide the numerator and denominator by their HCF, 6."],
          ["Calculate 3/5 + 1/10.", "7/10", "3/5 = 6/10, so 6/10 + 1/10 = 7/10."],
          ["Calculate 7/8 − 1/4.", "5/8", "1/4 = 2/8, so 7/8 − 2/8 = 5/8."],
          ["Calculate 2/3 × 3/4.", "1/2", "Multiply to get 6/12, then simplify to 1/2."]
        ]
      },
      {
        id: "decimals-and-percentages", title: "Decimals and percentages", group: "Numbers",
        summary: "Decimal place value, conversions, rounding and percentages.",
        lesson: "Digits after a decimal point represent tenths, hundredths, thousandths and smaller parts. To add or subtract decimals, line up the decimal points. To multiply or divide by 10, 100 or 1,000, move the decimal point the matching number of places.\n\nPercent means “out of 100”. Convert a percentage to a decimal by dividing by 100; convert a decimal to a percentage by multiplying by 100. A fraction can be changed to a percentage by making its denominator 100 or by dividing and multiplying by 100.",
        example: ["Find 15% of 240.", "10% of 240 is 24 and 5% is 12. Therefore 15% is 24 + 12 = 36."],
        questions: [
          ["Write 0.6 as a fraction in simplest form.", "3/5", "0.6 = 6/10; divide top and bottom by 2."],
          ["Write 3/4 as a percentage.", "75%", "3 ÷ 4 = 0.75, and 0.75 × 100 = 75%."],
          ["Calculate 25% of 160.", "40", "25% is one quarter, and 160 ÷ 4 = 40."],
          ["Calculate 3.45 + 2.8.", "6.25", "Write 2.8 as 2.80, then add the aligned decimal columns."]
        ]
      },
      {
        id: "integers", title: "Integers and directed numbers", group: "Numbers",
        summary: "Positive and negative numbers, ordering and operations.",
        lesson: "Integers are whole numbers, their negatives and zero. On a number line, numbers increase as you move right; a negative number farther from zero is smaller. For example, −7 < −2 < 0 < 3.\n\nWhen adding integers with the same sign, add their sizes and keep the sign. With different signs, subtract the smaller size from the larger and keep the sign of the number with the larger size. Subtracting a number is the same as adding its opposite.",
        example: ["Evaluate −8 + 13 − 6.", "−8 + 13 = 5, then 5 − 6 = −1."],
        questions: [
          ["Which is greater: −3 or −9?", "−3", "−3 is farther to the right on a number line."],
          ["Calculate −7 + 12.", "5", "The signs differ; 12 − 7 = 5, with the positive sign."],
          ["Calculate 4 − 11.", "−7", "4 − 11 = 4 + (−11) = −7."],
          ["The temperature is −2°C and falls by 5°C. What is it now?", "−7°C", "A fall of 5 means add −5: −2 + (−5) = −7."]
        ]
      },
      {
        id: "ratio-and-proportion", title: "Ratio and proportion", group: "Numbers",
        summary: "Equivalent ratios, sharing in a ratio and unit rates.",
        lesson: "A ratio compares quantities in the same order and, usually, the same units. Simplify a ratio by dividing every part by the same common factor. Equivalent ratios are made by multiplying or dividing every part by the same non-zero number.\n\nTo share an amount in a ratio, add the ratio parts, find the value of one part, then multiply by each ratio number. A unit rate compares a quantity with one unit, such as kilometres per hour.",
        example: ["Share 35 sweets in the ratio 2:5.", "There are 2 + 5 = 7 parts. One part is 35 ÷ 7 = 5 sweets, so the shares are 10 and 25 sweets."],
        questions: [
          ["Simplify the ratio 18:24.", "3:4", "Divide both parts by their HCF, 6."],
          ["Share $48 in the ratio 5:3.", "$30 and $18", "There are 8 parts; each is $48 ÷ 8 = $6."],
          ["A car travels 150 km in 3 hours. Find its average speed.", "50 km/h", "Speed = distance ÷ time = 150 ÷ 3."],
          ["If 4 notebooks cost $12, what is the cost of 7 at the same rate?", "$21", "One notebook costs $12 ÷ 4 = $3; 7 cost 7 × $3."]
        ]
      },
      {
        id: "sets", title: "Sets", group: "Algebra",
        summary: "Set notation, elements, subsets, union and intersection.",
        lesson: "A set is a well-defined collection of objects. We name sets with capital letters and list their elements inside braces, for example A = {1, 2, 3}. The symbol ∈ means “is an element of”; ∉ means “is not an element of”. The empty set, ∅, has no elements.\n\nThe union A ∪ B contains elements in A or B or both. The intersection A ∩ B contains only elements shared by both sets. A Venn diagram shows these relationships visually.",
        example: ["Let A = {1, 2, 3, 4} and B = {3, 4, 5}. Find A ∪ B and A ∩ B.", "A ∪ B = {1, 2, 3, 4, 5}; A ∩ B = {3, 4}."],
        questions: [
          ["If P = {a, e, i, o, u}, is e ∈ P?", "Yes", "The element e is listed in P."],
          ["If A = {2, 4, 6} and B = {4, 6, 8}, find A ∩ B.", "{4, 6}", "The intersection contains the elements in both sets."],
          ["For the same sets, find A ∪ B.", "{2, 4, 6, 8}", "The union lists all distinct elements from either set."],
          ["How many elements are in {1, 3, 5, 7}?", "4", "The set contains four distinct elements."]
        ]
      },
      {
        id: "algebraic-expressions", title: "Algebraic expressions", group: "Algebra",
        summary: "Variables, terms, coefficients and simplifying expressions.",
        lesson: "A variable is a letter that represents a number. In 5x + 3, x is the variable, 5 is its coefficient and 3 is a constant. Terms are separated by plus or minus signs. Only like terms—terms with the same variable part—can be added or subtracted.\n\nUse the distributive property to remove brackets: a(b + c) = ab + ac. When substituting a value, replace the variable with the number in brackets, then follow the order of operations.",
        example: ["Simplify 4x + 3 − 2x + 5.", "Combine like terms: (4x − 2x) + (3 + 5) = 2x + 8."],
        questions: [
          ["Simplify 7a + 2a.", "9a", "Both terms are like terms; add their coefficients, 7 + 2."],
          ["Simplify 5x + 4 − 2x.", "3x + 4", "Combine 5x − 2x; the constant 4 remains."],
          ["Expand 3(y + 4).", "3y + 12", "Multiply 3 by each term inside the brackets."],
          ["Find 2n + 1 when n = 6.", "13", "Substitute 6: 2 × 6 + 1 = 13."]
        ]
      },
      {
        id: "simple-equations", title: "Simple equations", group: "Algebra",
        summary: "Solving one-step and two-step linear equations.",
        lesson: "An equation says that two expressions have the same value. To find an unknown, keep the equation balanced: whatever operation you do to one side, do to the other. Undo addition or subtraction first, then undo multiplication or division.\n\nCheck a solution by substituting it into the original equation. Both sides should have the same value.",
        example: ["Solve 3x + 5 = 20.", "Subtract 5 from both sides: 3x = 15. Divide by 3: x = 5. Check: 3(5) + 5 = 20."],
        questions: [
          ["Solve x + 8 = 17.", "x = 9", "Subtract 8 from both sides."],
          ["Solve 5y = 35.", "y = 7", "Divide both sides by 5."],
          ["Solve 2a − 3 = 11.", "a = 7", "Add 3 to get 2a = 14; divide by 2."],
          ["A number divided by 4 is 6. What is the number?", "24", "Let the number be n: n ÷ 4 = 6, so n = 6 × 4."]
        ]
      },
      {
        id: "measurement-and-units", title: "Measurement and units", group: "Measurement",
        summary: "Metric units, unit conversions, time and temperature.",
        lesson: "Metric units are based on powers of ten. For length, 1 km = 1,000 m and 1 m = 100 cm. For mass, 1 kg = 1,000 g. For capacity, 1 L = 1,000 mL. Choose a unit that suits the quantity being measured.\n\nConvert from a larger metric unit to a smaller one by multiplying; convert to a larger one by dividing. For time, 1 hour = 60 minutes and 1 minute = 60 seconds. Always include a unit in a measurement answer.",
        example: ["Convert 2.6 km to metres.", "1 km = 1,000 m, so 2.6 × 1,000 = 2,600 m."],
        questions: [
          ["Convert 450 cm to metres.", "4.5 m", "Divide centimetres by 100 because 100 cm = 1 m."],
          ["Convert 3.2 kg to grams.", "3,200 g", "Multiply by 1,000 because 1 kg = 1,000 g."],
          ["How many minutes are in 2 hours 15 minutes?", "135 minutes", "2 × 60 + 15 = 135."],
          ["A bottle holds 1.5 L. How many millilitres is that?", "1,500 mL", "Multiply litres by 1,000."]
        ]
      },
      {
        id: "lines-angles-and-shapes", title: "Lines, angles and shapes", group: "Geometry",
        summary: "Angle types, angle facts, parallel lines and polygons.",
        lesson: "An acute angle is less than 90°, a right angle is 90°, an obtuse angle is between 90° and 180°, and a straight angle is 180°. Angles around a point add to 360°; angles on a straight line add to 180°.\n\nParallel lines never meet. A polygon is a closed shape made from straight sides. Triangles have three sides; quadrilaterals have four. A square has four equal sides and four right angles; a rectangle has opposite sides equal and four right angles.",
        example: ["Two angles on a straight line are x° and 68°. Find x.", "Angles on a straight line sum to 180°, so x = 180° − 68° = 112°."],
        questions: [
          ["What is the complement of 35°?", "55°", "Complementary angles sum to 90°: 90° − 35°."],
          ["Angles around a point are 90°, 125° and x°. Find x.", "145°", "360° − 90° − 125° = 145°."],
          ["How many sides does a hexagon have?", "6", "The prefix “hex” means six."],
          ["A triangle has angles 50° and 60°. Find its third angle.", "70°", "Triangle angles sum to 180°: 180° − 50° − 60°."]
        ]
      },
      {
        id: "perimeter-and-area", title: "Perimeter and area", group: "Measurement",
        summary: "Perimeter and area of rectangles, squares and triangles.",
        lesson: "Perimeter is the total distance around a 2D shape; add the lengths of its sides. Area measures the surface inside a shape and is written in square units. For a rectangle, area = length × width and perimeter = 2(length + width). For a square, area = side² and perimeter = 4 × side.\n\nThe area of a triangle is ½ × base × perpendicular height. Do not mix units: convert lengths to the same unit before calculating, and use square units for area.",
        example: ["Find the area and perimeter of a rectangle 9 cm long and 4 cm wide.", "Area = 9 × 4 = 36 cm². Perimeter = 2(9 + 4) = 26 cm."],
        questions: [
          ["Find the perimeter of a square with side 7 cm.", "28 cm", "Perimeter = 4 × 7."],
          ["Find the area of a 12 m by 5 m rectangle.", "60 m²", "Area = length × width = 12 × 5."],
          ["Find the area of a triangle with base 10 cm and height 6 cm.", "30 cm²", "Area = ½ × 10 × 6."],
          ["A rectangle has perimeter 30 cm and length 9 cm. Find its width.", "6 cm", "2(9 + width) = 30, so 9 + width = 15."]
        ]
      },
      {
        id: "data-and-averages", title: "Data handling and averages", group: "Data",
        summary: "Collecting, organising and interpreting data; mean, median and mode.",
        lesson: "Data are facts or measurements collected to answer a question. Organise data in a tally or frequency table, then present it with a suitable chart such as a bar chart or pictogram. Give charts a title and label their axes clearly.\n\nThe mean is the total of the values divided by how many values there are. The median is the middle value after sorting the data. The mode is the value that occurs most often. The range is the largest value minus the smallest.",
        example: ["Find the mean, median and mode of 2, 4, 4, 6, 9.", "Mean = 25 ÷ 5 = 5. The middle value is 4, so median = 4. The most frequent value is 4, so mode = 4."],
        questions: [
          ["Find the mean of 3, 5, 7 and 9.", "6", "The total is 24; divide by 4 values."],
          ["Find the median of 2, 8, 5, 1, 4.", "4", "Sort to get 1, 2, 4, 5, 8; the middle value is 4."],
          ["Find the mode of 6, 3, 6, 2, 6, 3.", "6", "6 occurs three times, more than any other value."],
          ["Find the range of 12, 4, 9, 15, 7.", "11", "Range = largest − smallest = 15 − 4."]
        ]
      }
    ]
  },
  {
    level: "JSS2",
    topics: [
      {
        id: "number-bases", title: "Number bases", group: "Numbers",
        summary: "Place value in other bases and converting between bases.",
        lesson: "Base ten uses the digits 0–9. In base b, place values are powers of b: …, b³, b², b, 1. A base-b number uses only digits smaller than b. For example, base two uses 0 and 1; base five uses 0–4.\n\nTo convert a number from another base to base ten, multiply each digit by its place value and add. To convert from base ten to another base, divide repeatedly by the new base and read the remainders from bottom to top.",
        example: ["Convert 132₄ to base ten.", "1 × 4² + 3 × 4 + 2 = 16 + 12 + 2 = 30₁₀."],
        questions: [
          ["Convert 1011₂ to base ten.", "11₁₀", "1 × 8 + 0 × 4 + 1 × 2 + 1 = 11."],
          ["Convert 23₅ to base ten.", "13₁₀", "2 × 5 + 3 = 13."],
          ["Convert 14₁₀ to base two.", "1110₂", "14 ÷ 2 gives remainders 0, 1, 1, 1; read upward."],
          ["Write the largest single digit in base seven.", "6", "Digits in base seven run from 0 to 6."]
        ]
      },
      {
        id: "indices-and-standard-form", title: "Indices and standard form", group: "Numbers",
        summary: "Powers, index laws, roots and scientific notation.",
        lesson: "An index tells how many times a base is multiplied by itself: 3⁴ = 3 × 3 × 3 × 3. For the same base, multiply powers by adding indices (aᵐ × aⁿ = aᵐ⁺ⁿ) and divide by subtracting indices (aᵐ ÷ aⁿ = aᵐ⁻ⁿ). A zero power equals 1 for any non-zero base.\n\nStandard form writes a number as A × 10ⁿ, where 1 ≤ A < 10 and n is an integer. It is useful for very large or very small numbers.",
        example: ["Write 0.00072 in standard form.", "Move the decimal four places right to get 7.2; compensate with 10⁻⁴. Answer: 7.2 × 10⁻⁴."],
        questions: [
          ["Evaluate 2⁵.", "32", "2 × 2 × 2 × 2 × 2 = 32."],
          ["Simplify 5³ × 5².", "5⁵ = 3,125", "For the same base, add the indices: 3 + 2 = 5."],
          ["Write 4,500,000 in standard form.", "4.5 × 10⁶", "Move the decimal six places left to make 4.5."],
          ["Evaluate √144.", "12", "12 × 12 = 144, and the principal square root is positive."]
        ]
      },
      {
        id: "fractions-and-percent-applications", title: "Fractions, decimals and percentages", group: "Numbers",
        summary: "Mixed-number operations, percentage change and reverse percentages.",
        lesson: "Convert a mixed number to an improper fraction before multiplying or dividing. For addition and subtraction, use a common denominator. To find a percentage of an amount, convert the percentage to a fraction or decimal and multiply.\n\nFor percentage increase or decrease, calculate the change as a fraction of the original amount, then multiply by 100%. For a reverse percentage, remember that the given amount is the result after the change, not the original.",
        example: ["A $80 item is reduced by 15%. Find its sale price.", "15% of $80 = $12. Sale price = $80 − $12 = $68."],
        questions: [
          ["Calculate 2 1/3 + 1 1/6.", "3 1/2", "Convert to sixths: 2 2/6 + 1 1/6 = 3 3/6."],
          ["Increase 200 by 12%.", "224", "12% of 200 is 24; 200 + 24 = 224."],
          ["A $60 price is reduced by 20%. Find the new price.", "$48", "20% of $60 is $12; $60 − $12 = $48."],
          ["After a 10% discount, a bag costs $90. What was its original price?", "$100", "$90 is 90% of the original; $90 ÷ 0.9 = $100."]
        ]
      },
      {
        id: "ratio-rate-proportion", title: "Ratio, rate and proportion", group: "Numbers",
        summary: "Scale, direct proportion, speed and sharing quantities.",
        lesson: "A proportion states that two ratios are equal. If quantities are in direct proportion, multiplying one by a factor multiplies the other by the same factor. Use a ratio table or unitary method to scale quantities.\n\nA rate compares different units, such as kilometres per hour or dollars per kilogram. Speed = distance ÷ time. Keep units consistent when calculating and state the units in your answer.",
        example: ["A map scale is 1 cm : 5 km. What real distance is shown by 7.2 cm?", "7.2 × 5 = 36 km."],
        questions: [
          ["If 5 kg of rice costs $15, what do 8 kg cost at the same rate?", "$24", "One kilogram costs $3; 8 × $3 = $24."],
          ["A cyclist travels 42 km in 3 hours. Find the average speed.", "14 km/h", "Speed = 42 ÷ 3."],
          ["Share 84 in the ratio 2:5.", "24 and 60", "Seven parts total; each is 84 ÷ 7 = 12."],
          ["If y is directly proportional to x and y = 18 when x = 6, find y when x = 10.", "30", "The constant y ÷ x = 3, so y = 3 × 10."]
        ]
      },
      {
        id: "commercial-arithmetic", title: "Commercial arithmetic", group: "Numbers",
        summary: "Profit, loss, discount, tax and simple interest.",
        lesson: "Profit = selling price − cost price; loss = cost price − selling price. Profit or loss percentage is measured against the cost price. A discount is a reduction from the marked price; the sale price is marked price minus discount.\n\nSimple interest is calculated only on the original principal: I = P × R × T ÷ 100, where P is principal, R is annual rate percent and T is time in years. The total amount is principal + interest.",
        example: ["Find the simple interest on $500 at 6% per year for 2 years.", "I = 500 × 6 × 2 ÷ 100 = $60. Total amount = $560."],
        questions: [
          ["An item costs $40 and sells for $52. Find the profit.", "$12", "Profit = selling price − cost price = 52 − 40."],
          ["A $120 shirt has a 25% discount. Find the sale price.", "$90", "Discount = 25% of 120 = $30; 120 − 30 = $90."],
          ["Find the simple interest on $800 at 5% per year for 3 years.", "$120", "I = 800 × 5 × 3 ÷ 100."],
          ["An item bought for $60 is sold at a loss of $9. Find the loss percentage.", "15%", "Loss % = (9 ÷ 60) × 100 = 15%."]
        ]
      },
      {
        id: "expansion-and-factorisation", title: "Expansion and factorisation", group: "Algebra",
        summary: "Expand brackets and factorise by taking out common factors.",
        lesson: "To expand a bracket, multiply each term inside by the factor outside. For example, a(b + c) = ab + ac. When multiplying two binomials, multiply every term in the first bracket by every term in the second, then collect like terms.\n\nFactorisation reverses expansion. Find the highest common factor (HCF) of all terms and place it outside brackets. Always check by expanding your result.",
        example: ["Expand and simplify (x + 3)(x + 2).", "x·x + x·2 + 3·x + 3·2 = x² + 5x + 6."],
        questions: [
          ["Expand 4(2x − 3).", "8x − 12", "Multiply both terms inside by 4."],
          ["Expand (x + 5)(x + 1).", "x² + 6x + 5", "Multiply term by term, then combine x + 5x."],
          ["Factorise 6x + 18.", "6(x + 3)", "The HCF is 6; divide each term by 6."],
          ["Factorise x² + 7x.", "x(x + 7)", "Both terms contain a common factor x."]
        ]
      },
      {
        id: "equations-inequalities-and-formulae", title: "Equations, inequalities and formulae", group: "Algebra",
        summary: "Solve linear equations, interpret inequalities and substitute values.",
        lesson: "Solve a linear equation by applying inverse operations equally to both sides, then check by substitution. An inequality uses <, >, ≤ or ≥ to compare values. Solve it like an equation; if you multiply or divide both sides by a negative number, reverse the inequality sign.\n\nA formula is a rule linking quantities. Substitute known values using brackets, follow the order of operations and include units where appropriate.",
        example: ["Solve 3x − 4 = 11.", "Add 4 to both sides: 3x = 15. Divide by 3: x = 5."],
        questions: [
          ["Solve 4x + 7 = 31.", "x = 6", "Subtract 7: 4x = 24; divide by 4."],
          ["Solve 2y − 5 < 9.", "y < 7", "Add 5 to get 2y < 14; divide by 2."],
          ["If P = 2l + 2w, find P when l = 8 and w = 3.", "22", "P = 2(8) + 2(3) = 16 + 6."],
          ["Solve −3x > 12.", "x < −4", "Divide by −3 and reverse the inequality sign."]
        ]
      },
      {
        id: "sequences", title: "Number sequences", group: "Algebra",
        summary: "Recognise patterns and find the nth term of linear sequences.",
        lesson: "A sequence is an ordered list following a rule. In an arithmetic sequence, the difference between consecutive terms is constant. Find this common difference to continue the sequence.\n\nFor a linear sequence, the nth-term rule has the form an + c. The coefficient a is the common difference. Substitute n = 1 and compare with the first term to find c. Check the rule against another term.",
        example: ["Find the nth term of 5, 8, 11, 14, …", "The common difference is 3, so start with 3n. When n = 1, 3n = 3; add 2 to get 5. Rule: 3n + 2."],
        questions: [
          ["Write the next two terms: 4, 9, 14, 19, …", "24, 29", "The common difference is 5."],
          ["Find the common difference of 17, 12, 7, 2, …", "−5", "Subtract consecutive terms: 12 − 17 = −5."],
          ["Find the nth term of 2, 5, 8, 11, …", "3n − 1", "The difference is 3; 3(1) − 1 = 2."],
          ["Which term of 4, 8, 12, 16, … is 40?", "The 10th term", "The rule is 4n; solve 4n = 40 to get n = 10."]
        ]
      },
      {
        id: "geometry-and-polygons", title: "Angles, triangles and polygons", group: "Geometry",
        summary: "Angle rules, parallel lines and interior-angle sums.",
        lesson: "Angles on a straight line add to 180°, around a point add to 360°, and vertically opposite angles are equal. For parallel lines cut by a transversal, corresponding and alternate angles are equal; co-interior angles add to 180°.\n\nThe interior angles of a triangle add to 180°. The sum of interior angles in an n-sided polygon is (n − 2) × 180°. For a regular polygon, each interior angle equals this sum divided by n.",
        example: ["Find each interior angle of a regular hexagon.", "Sum = (6 − 2) × 180° = 720°. Each angle = 720° ÷ 6 = 120°."],
        questions: [
          ["A triangle has angles 42° and 79°. Find the third angle.", "59°", "180° − 42° − 79° = 59°."],
          ["Find the sum of the interior angles of a pentagon.", "540°", "(5 − 2) × 180° = 540°."],
          ["One angle on a straight line is 127°. Find the other.", "53°", "180° − 127° = 53°."],
          ["A regular octagon has what interior-angle sum?", "1,080°", "(8 − 2) × 180° = 1,080°."]
        ]
      },
      {
        id: "constructions-and-bearings", title: "Geometric constructions and bearings", group: "Geometry",
        summary: "Accurate ruler-and-compass constructions and three-figure bearings.",
        lesson: "A geometric construction uses a ruler and compass to create an accurate diagram. Keep the compass width fixed when drawing arcs, and leave construction arcs visible so your method can be checked. Common constructions include perpendicular bisectors, angle bisectors and triangles from given side lengths.\n\nA bearing is a direction measured clockwise from north and written with three digits, from 000° to 360°. Draw a north line at the starting point, then measure the clockwise angle.",
        example: ["A direction is 40° east of north. Write its bearing.", "Bearings start at north and turn clockwise. The direction is 040°."],
        questions: [
          ["Write due east as a three-figure bearing.", "090°", "Due east is a quarter-turn clockwise from north."],
          ["Write due south as a three-figure bearing.", "180°", "South is halfway around the compass from north."],
          ["A bearing is 225°. Which compass direction is this?", "South-west", "225° is halfway between south (180°) and west (270°)."],
          ["What does a perpendicular bisector do to a line segment?", "It crosses it at 90° through its midpoint.", "A perpendicular bisector is both perpendicular to and exactly halfway along the segment."]
        ]
      },
      {
        id: "mensuration", title: "Mensuration: area, circles and volume", group: "Measurement",
        summary: "Area of compound shapes and circles; volume of cuboids.",
        lesson: "The area of a parallelogram is base × perpendicular height. The area of a trapezium is ½ × (sum of parallel sides) × perpendicular height. A circle has circumference C = 2πr and area A = πr², where r is its radius. Use π ≈ 3.14 unless told otherwise.\n\nThe volume of a cuboid is length × width × height and is written in cubic units. For a compound shape, split it into familiar shapes, calculate each area, then add or subtract as needed.",
        example: ["Find the area and circumference of a circle with radius 7 cm. Use π = 22/7.", "Area = 22/7 × 7² = 154 cm². Circumference = 2 × 22/7 × 7 = 44 cm."],
        questions: [
          ["Find the area of a parallelogram with base 9 cm and height 4 cm.", "36 cm²", "Area = base × perpendicular height = 9 × 4."],
          ["Find the volume of a cuboid 5 cm × 3 cm × 4 cm.", "60 cm³", "Volume = length × width × height."],
          ["Find the circumference of a circle with diameter 10 cm. Use π = 3.14.", "31.4 cm", "Circumference = π × diameter = 3.14 × 10."],
          ["Find the area of a circle with radius 3 cm. Use π = 3.14.", "28.26 cm²", "Area = πr² = 3.14 × 3²."]
        ]
      },
      {
        id: "coordinates-and-transformations", title: "Coordinates and transformations", group: "Geometry",
        summary: "Plot ordered pairs and describe reflections, translations and rotations.",
        lesson: "Coordinates are written (x, y): move horizontally along the x-axis first, then vertically along the y-axis. The origin is (0, 0). Points to the left of the y-axis or below the x-axis have negative coordinates.\n\nA translation slides a shape by a stated vector without turning it. A reflection flips a shape across a mirror line. A rotation turns it around a centre by a stated angle and direction. Transformations preserve size and shape.",
        example: ["Translate point (2, −1) by the vector (3, 4).", "Add the vector components: (2 + 3, −1 + 4) = (5, 3)."],
        questions: [
          ["In which quadrant is point (−3, 4)?", "Quadrant II", "Its x-coordinate is negative and its y-coordinate is positive."],
          ["Translate (−1, 2) by vector (4, −3).", "(3, −1)", "Add coordinates: (−1 + 4, 2 − 3)."],
          ["Reflect (5, −2) in the x-axis.", "(5, 2)", "Reflection in the x-axis changes the sign of y only."],
          ["What are the coordinates of the origin?", "(0, 0)", "The x-axis and y-axis meet at the origin."]
        ]
      },
      {
        id: "statistics-and-graphs", title: "Statistics and graphs", group: "Data",
        summary: "Frequency tables, bar charts, averages and interpreting graphs.",
        lesson: "A frequency table records how often each value occurs. Choose a clear scale when drawing a bar chart, label both axes, use equal-width bars and leave gaps between categories. A line graph is useful for showing how a quantity changes over time.\n\nFor a frequency table, calculate the mean by multiplying each value by its frequency, adding these products and dividing by the total frequency. The median and mode describe the centre in different ways; the range measures spread.",
        example: ["A score of 2 occurs 1 time, 3 occurs 2 times and 5 occurs 1 time. Find the mean.", "Total = 2×1 + 3×2 + 5×1 = 13. There are 4 scores, so mean = 13 ÷ 4 = 3.25."],
        questions: [
          ["Find the mean of 4, 6, 6, 8 and 11.", "7", "The total is 35; divide by 5."],
          ["Find the median of 3, 9, 2, 7, 5, 8.", "6", "Sort to get 2, 3, 5, 7, 8, 9; average the middle pair: (5 + 7) ÷ 2."],
          ["What chart is suitable for showing temperature changes across a week?", "A line graph", "A line graph shows how a continuous value changes over time."],
          ["A class has 12 boys and 18 girls. What fraction of the class are girls?", "3/5", "There are 30 pupils; 18/30 simplifies to 3/5."]
        ]
      },
      {
        id: "probability", title: "Probability", group: "Data",
        summary: "Outcomes, sample spaces and probability on a 0-to-1 scale.",
        lesson: "Probability measures how likely an event is. It ranges from 0 (impossible) to 1 (certain). For equally likely outcomes, probability = number of favourable outcomes ÷ total number of possible outcomes.\n\nList a sample space to make sure every outcome is counted once. The probabilities of all outcomes in a complete sample space add to 1. The probability that an event does not happen is 1 minus the probability that it happens.",
        example: ["A fair six-sided die is rolled. Find the probability of rolling an even number.", "The even outcomes are 2, 4 and 6: 3 favourable outcomes out of 6. Probability = 3/6 = 1/2."],
        questions: [
          ["A fair coin is tossed. What is the probability of tails?", "1/2", "There is 1 tail outcome among 2 equally likely outcomes."],
          ["A bag has 3 red and 5 blue counters. What is the probability of red?", "3/8", "There are 3 favourable counters among 8 counters in total."],
          ["A fair die is rolled. What is the probability of a number greater than 4?", "1/3", "The favourable results are 5 and 6: 2/6 = 1/3."],
          ["If P(rain) = 0.3, what is P(no rain)?", "0.7", "Complementary probabilities add to 1: 1 − 0.3 = 0.7."]
        ]
      }
    ]
  }
];

const STORAGE_KEY = "mathematics-made-easy-progress-v1";
const appContent = document.getElementById("app-content");
const searchInput = document.getElementById("search-input");
const searchBox = document.querySelector(".search-box");
const breadcrumbCurrent = document.getElementById("breadcrumb-current");
const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("mobile-backdrop");
let completedTopics = loadProgress();
let screen = { type: "home" };
let activeGroup = "All";
let toastTimer;

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    if (Array.isArray(parsed) && parsed.every((id) => typeof id === "string")) return new Set(parsed);
    console.error("Saved learning progress has an unexpected format.");
  } catch (error) {
    console.error("Could not read saved learning progress.", error);
  }
  return new Set();
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedTopics]));
  } catch (error) {
    console.error("Could not save learning progress.", error);
    showToast("Progress could not be saved on this device.");
  }
}

function allTopics() {
  return curriculum.flatMap((course) => course.topics.map((topic) => ({ ...topic, level: course.level })));
}

function getTopic(level, id) {
  const course = curriculum.find((item) => item.level === level);
  return course?.topics.find((item) => item.id === id);
}

function getCourse(level) {
  return curriculum.find((item) => item.level === level);
}

function countCompleted(level) {
  const topics = level ? getCourse(level).topics : allTopics();
  return topics.filter((topic) => completedTopics.has(`${level || curriculum.find((course) => course.topics.some((item) => item.id === topic.id)).level}:${topic.id}`)).length;
}

function progressMarkup(level) {
  const total = getCourse(level).topics.length;
  const done = countCompleted(level);
  const percent = total ? Math.round((done / total) * 100) : 0;
  return `<div class="progress-row"><span>${done} of ${total} units completed</span><strong>${percent}%</strong></div><div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div>`;
}

function renderHome() {
  breadcrumbCurrent.textContent = "Overview";
  const allDone = completedTopics.size;
  const total = allTopics().length;
  const next = allTopics().find((topic) => !completedTopics.has(`${topic.level}:${topic.id}`)) || allTopics()[0];
  appContent.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow">YOUR MATHEMATICS LEARNING SPACE</div>
        <h1>Small steps.<br>Big math confidence.</h1>
        <p class="intro">Clear lessons, worked examples and practice for every core JSS1 and JSS2 mathematics topic.</p>
        <button class="hero-cta" type="button" data-action="all-topics">Explore all topics <span>→</span></button>
      </div>
      <div class="hero-art" aria-hidden="true"><span class="math-symbol">π</span><span class="orbit"></span></div>
    </section>
    <div class="section-heading"><div><h2>Choose your class</h2><p>Pick up where you are, at your own pace.</p></div><button class="text-button" type="button" data-action="all-topics">View all topics →</button></div>
    <section class="class-grid" aria-label="Mathematics classes">
      ${curriculum.map((course) => `
        <button class="class-card" type="button" data-level="${course.level}">
          <div class="class-card-top"><span class="class-badge ${course.level === "JSS1" ? "badge-one" : "badge-two"}">${course.level.slice(-1)}</span><div><h3>${course.level.replace("JSS", "JSS ")}</h3><p>${course.topics.length} learning units · ${course.topics.length * 4} practice questions</p></div><span class="card-arrow">↗</span></div>
          ${progressMarkup(course.level)}
        </button>`).join("")}
    </section>
    <section class="stats-grid" aria-label="Your learning progress">
      <div class="stat-card"><span class="stat-icon">▦</span><div><strong>${total}</strong><small>topics to explore</small></div></div>
      <div class="stat-card"><span class="stat-icon">✓</span><div><strong>${allDone}</strong><small>topics completed</small></div></div>
      <div class="stat-card"><span class="stat-icon">✎</span><div><strong>${total * 4}</strong><small>practice questions</small></div></div>
    </section>
    <section class="continue-card"><span class="continue-icon">✦</span><div><small>READY WHEN YOU ARE</small><strong>${allDone ? "Continue with " : "Start with "}${next.title}</strong></div><button type="button" data-action="topic" data-level="${next.level}" data-topic="${next.id}">${allDone ? "Continue" : "Start learning"} →</button></section>
    <div class="section-heading"><div><h2>Made for steady progress</h2><p>Every unit includes a focused explanation, a worked example and four questions with answers.</p></div></div>
    <p class="intro">The topic sequence follows common junior secondary mathematics curricula. Schools may arrange some units differently; use the class menu to browse the full syllabus.</p>`;
}

function renderTopics(level = "all", group = "All") {
  screen = { type: "topics", level };
  activeGroup = group;
  const topics = level === "all" ? allTopics() : getCourse(level).topics.map((topic) => ({ ...topic, level }));
  const groups = ["All", ...new Set(topics.map((topic) => topic.group))];
  const filtered = group === "All" ? topics : topics.filter((topic) => topic.group === group);
  breadcrumbCurrent.textContent = level === "all" ? "All topics" : level.replace("JSS", "JSS ");
  appContent.innerHTML = `
    <div class="eyebrow">${level === "all" ? "THE FULL SYLLABUS" : `${level.replace("JSS", "JSS ")} MATHEMATICS`}</div>
    <div class="unit-header"><span class="class-badge ${level === "JSS1" ? "badge-one" : level === "JSS2" ? "badge-two" : "badge-one"}">${level === "all" ? "∑" : level.slice(-1)}</span><div><h1>${level === "all" ? "All learning topics" : `${level.replace("JSS", "JSS ")} topics`}</h1><p>${topics.length} units · ${topics.length * 4} explained practice questions</p></div></div>
    <div class="filter-row" aria-label="Filter topics by subject area">${groups.map((item) => `<button type="button" class="filter-chip ${item === group ? "selected" : ""}" data-action="filter" data-group="${item}">${item}</button>`).join("")}</div>
    <section class="topic-grid" aria-label="Topic list">${filtered.map((topic, index) => topicCard(topic, index)).join("")}</section>`;
}

function topicCard(topic, index) {
  const done = completedTopics.has(`${topic.level}:${topic.id}`);
  return `<button type="button" class="topic-card" data-action="topic" data-level="${topic.level}" data-topic="${topic.id}">
    <span class="topic-card-top"><span class="topic-number">${topic.level} · ${String(index + 1).padStart(2, "0")}</span><span class="topic-status ${done ? "done" : ""}" aria-label="${done ? "Completed" : "Not completed"}">${done ? "✓" : "○"}</span></span>
    <h3>${topic.title}</h3><p>${topic.summary}</p>
    <span class="topic-card-bottom"><span>${topic.group} · 4 questions</span><span>Open lesson&nbsp; →</span></span>
  </button>`;
}

function extractNumberParts(value) {
  const cleaned = String(value || "");
  const match = cleaned.match(/-?\d[\d,]*(?:\.\d+)?/);
  if (!match) return null;
  const numberText = match[0];
  const prefix = cleaned.slice(0, cleaned.indexOf(numberText));
  const suffix = cleaned.slice(cleaned.indexOf(numberText) + numberText.length);
  return {
    number: Number(numberText.replace(/,/g, "")),
    prefix,
    suffix
  };
}

function formatNumericValue(value) {
  if (Number.isInteger(value)) {
    return new Intl.NumberFormat("en-US").format(value);
  }
  return Number(value.toFixed(2)).toString();
}

function buildQuestionOptions(prompt = "", answer = "") {
  const answerText = String(answer).trim();
  if (!answerText) return ["A", "B", "C", "D"];
  const fractionOptions = ["1/2", "2/3", "3/4", "5/8", "7/10", "2/5", "3/5", "5/6", "1/3"];
  const compassDirections = ["North", "East", "South", "West", "North-east", "North-west", "South-east", "South-west"];
  const primeOptions = ["Prime", "Composite", "Even", "Odd"];
  const sameAnswer = (candidate) => String(candidate).trim() === answerText;

  if (answerText.includes("/")) {
    return fractionOptions.filter((option) => !sameAnswer(option)).slice(0, 3).concat(answerText);
  }

  const numericParts = extractNumberParts(answerText);
  if (numericParts) {
    const { number, prefix, suffix } = numericParts;
    const candidateValues = [number + 1, number - 1, number + 5, number - 5, number * 2, number / 2, number + 10, number - 10]
      .filter((value) => Number.isFinite(value) && !sameAnswer(`${prefix}${formatNumericValue(value)}${suffix}`));

    const options = [];
    const seen = new Set();
    const addOption = (value) => {
      const formatted = `${prefix}${formatNumericValue(value)}${suffix}`;
      if (formatted && !seen.has(formatted)) {
        seen.add(formatted);
        options.push(formatted);
      }
    };

    addOption(number);
    candidateValues.forEach(addOption);
    while (options.length < 4) {
      const fallbackValue = options.length === 1 ? number + 2 : number + 3;
      addOption(fallbackValue);
    }
    return options.slice(0, 4);
  }

  if (/prime|composite/i.test(answerText)) {
    return primeOptions.filter((option) => !sameAnswer(option)).slice(0, 3).concat(answerText);
  }

  if (/(north|south|east|west)/i.test(answerText)) {
    return compassDirections.filter((option) => !sameAnswer(option)).slice(0, 3).concat(answerText);
  }

  if (/^x\s*=|^y\s*=|^n\s*=/i.test(answerText)) {
    const numericValue = extractNumberParts(answerText)?.number;
    const ops = [numericValue ? numericValue - 1 : 3, numericValue ? numericValue + 1 : 5, numericValue ? numericValue + 2 : 9, numericValue ? numericValue - 2 : 7];
    const optionStrings = ops.map((value) => `x = ${value}`);
    return optionStrings.filter((option) => !sameAnswer(option)).slice(0, 3).concat(answerText);
  }

  const fallback = [answerText, "Option A", "Option B", "Option C"];
  return fallback.filter((option, index, array) => array.indexOf(option) === index).slice(0, 4);
}

function normalizeQuestion(question) {
  const [prompt, answer, explanation, providedOptions] = question;
  return {
    prompt: String(prompt || ""),
    answer: String(answer || ""),
    explanation: String(explanation || ""),
    options: Array.isArray(providedOptions) && providedOptions.length ? providedOptions.map((option) => String(option)) : buildQuestionOptions(prompt, answer)
  };
}

function renderLesson(level, id) {
  const topic = getTopic(level, id);
  if (!topic) {
    renderTopics(level);
    showToast("That topic could not be found.");
    return;
  }
  screen = { type: "lesson", level, id };
  breadcrumbCurrent.textContent = topic.title;
  const course = getCourse(level);
  const index = course.topics.findIndex((item) => item.id === id);
  const previous = course.topics[index - 1];
  const next = course.topics[index + 1];
  const done = completedTopics.has(`${level}:${id}`);
  appContent.innerHTML = `
    <button class="back-link" type="button" data-action="level" data-level="${level}"><span>←</span> Back to ${level.replace("JSS", "JSS ")} topics</button>
    <div class="lesson-layout">
      <article class="lesson-main">
        <div class="lesson-title-row"><span class="topic-mark">${level.slice(-1)}</span><div><div class="eyebrow">${level.replace("JSS", "JSS ")} · ${topic.group}</div><h1>${topic.title}</h1><p>${topic.summary}</p></div></div>
        <section class="lesson-card"><h2>Let’s understand it</h2><div class="lesson-copy">${topic.lesson.split("\n\n").map((paragraph) => `<p>${paragraph}</p>`).join("")}</div></section>
        <section class="example-card"><p class="example-label">Worked example</p><h2>${topic.example[0]}</h2><p>${topic.example[1]}</p></section>
        <div class="practice-heading"><div><h2>Try it yourself</h2><p>Have a go first, then reveal the worked answer.</p></div><span class="practice-count">${topic.questions.length} questions</span></div>
        <section aria-label="Practice questions">${topic.questions.map((question, questionIndex) => {
          const currentQuestion = normalizeQuestion(question);
          return `
          <div class="question-card" data-correct-answer="${escapeHtml(currentQuestion.answer)}">
            <div class="question-top"><span class="question-number">${questionIndex + 1}</span><div class="question-text">${currentQuestion.prompt}</div><button class="answer-toggle" type="button" data-answer="${questionIndex}" aria-expanded="false">Show answer</button></div>
            <div class="answer-options" role="listbox" aria-label="Answer choices for question ${questionIndex + 1}">${currentQuestion.options.map((option) => `<button class="answer-option" type="button" data-question-index="${questionIndex}" data-option-value="${escapeHtml(option)}">${option}</button>`).join("")}</div>
            <div class="answer-panel" data-answer-panel="${questionIndex}" hidden><strong>Working:</strong> ${currentQuestion.explanation}<br><strong>Answer: ${currentQuestion.answer}</strong></div>
          </div>`;
        }).join("")}</section>
        <nav class="lesson-navigation" aria-label="Navigate between topics">
          ${previous ? `<button type="button" data-action="topic" data-level="${level}" data-topic="${previous.id}">← ${previous.title}</button>` : "<span></span>"}
          ${next ? `<button type=\"button\" data-action=\"topic\" data-level=\"${level}\" data-topic=\"${next.id}\">${next.title} →</button>` : "<span></span>"}
        </nav>
      </article>
      <aside class="lesson-sidebar">
        <div class="side-info-card"><h3>Unit overview</h3>
          <div class="detail-row"><span>Class</span><strong>${level.replace("JSS", "JSS ")}</strong></div>
          <div class="detail-row"><span>Subject area</span><strong>${topic.group}</strong></div>
          <div class="detail-row"><span>Practice</span><strong>${topic.questions.length} questions</strong></div>
          <button type="button" class="complete-button ${done ? "completed" : ""}" data-action="complete" data-level="${level}" data-topic="${id}">${done ? "✓  Completed" : "Mark as complete"}</button>
        </div>
        <div class="side-tip"><strong>✦ Learning tip</strong><p>Try each question before opening its answer. Explaining your steps helps the idea stick.</p></div>
      </aside>
    </div>`;
}

function renderSearch(query) {
  screen = { type: "search", query };
  breadcrumbCurrent.textContent = "Search";
  const normalized = query.trim().toLowerCase();
  const results = normalized ? allTopics().filter((topic) => `${topic.title} ${topic.summary} ${topic.group} ${topic.level}`.toLowerCase().includes(normalized)) : [];
  appContent.innerHTML = `
    <div class="eyebrow">TOPIC LIBRARY</div><div class="unit-header"><span class="class-badge badge-one">⌕</span><div><h1>Search topics</h1><p>${normalized ? `${results.length} result${results.length === 1 ? "" : "s"} for “${escapeHtml(query.trim())}”` : "Type a topic, skill or class in the search box above."}</p></div></div>
    ${results.length ? `<section class="topic-grid" aria-label="Search results">${results.map((topic, index) => topicCard(topic, index)).join("")}</section>` : normalized ? `<div class="empty-state"><strong>No topics found yet</strong>Try a different word, like fractions, angles or algebra.</div>` : ""}`;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    document.body.append(toast);
  }
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2600);
}

function closeMobileNav() {
  sidebar.classList.remove("open");
  backdrop.classList.remove("show");
  document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
}

document.getElementById("topic-count").textContent = allTopics().length;
document.getElementById("menu-toggle").addEventListener("click", () => {
  const open = sidebar.classList.toggle("open");
  backdrop.classList.toggle("show", open);
  document.getElementById("menu-toggle").setAttribute("aria-expanded", String(open));
});
backdrop.addEventListener("click", closeMobileNav);

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action], [data-level], .answer-toggle, .answer-option");
  if (!target) return;
  if (target.matches(".answer-toggle")) {
    const panel = appContent.querySelector(`[data-answer-panel="${target.dataset.answer}"]`);
    const isOpen = !panel.hidden;
    panel.hidden = isOpen;
    target.textContent = isOpen ? "Show answer" : "Hide answer";
    target.setAttribute("aria-expanded", String(!isOpen));
    return;
  }
  if (target.matches(".answer-option")) {
    const questionCard = target.closest(".question-card");
    const buttons = questionCard.querySelectorAll(".answer-option");
    const correctAnswer = questionCard.dataset.correctAnswer;
    const selectedValue = target.dataset.optionValue;
    buttons.forEach((button) => {
      const isSelected = button === target;
      const isCorrect = button.dataset.optionValue === correctAnswer;
      button.classList.toggle("selected", isSelected);
      button.classList.toggle("correct", !isSelected && isCorrect);
      button.classList.toggle("wrong", isSelected && selectedValue !== correctAnswer);
      button.disabled = true;
    });
    target.classList.toggle("selected", true);
    const panel = questionCard.querySelector(".answer-panel");
    panel.hidden = false;
    const toggle = questionCard.querySelector(".answer-toggle");
    if (toggle) {
      toggle.textContent = selectedValue === correctAnswer ? "Correct!" : "Review answer";
      toggle.setAttribute("aria-expanded", "true");
    }
    return;
  }
  if (target.dataset.action === "complete") {
    const key = `${target.dataset.level}:${target.dataset.topic}`;
    if (completedTopics.has(key)) completedTopics.delete(key);
    else completedTopics.add(key);
    saveProgress();
    renderLesson(target.dataset.level, target.dataset.topic);
    return;
  }
  if (target.dataset.action === "filter") {
    renderTopics(screen.level, target.dataset.group);
    return;
  }
  if (target.dataset.action === "home") {
    searchInput.value = "";
    searchBox.classList.remove("search-open");
    screen = { type: "home" };
    renderHome();
    closeMobileNav();
    return;
  }
  if (target.dataset.action === "all-topics") {
    searchInput.value = "";
    searchBox.classList.remove("search-open");
    renderTopics("all");
    closeMobileNav();
    return;
  }
  if (target.dataset.action === "topic") {
    searchInput.value = "";
    searchBox.classList.remove("search-open");
    renderLesson(target.dataset.level, target.dataset.topic);
    closeMobileNav();
    return;
  }
  if (target.dataset.action === "level" || target.dataset.level) {
    searchInput.value = "";
    searchBox.classList.remove("search-open");
    renderTopics(target.dataset.level);
    closeMobileNav();
  }
});

searchInput.addEventListener("focus", () => searchBox.classList.add("search-open"));
searchBox.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 760px)").matches && !searchBox.classList.contains("search-open")) {
    searchBox.classList.add("search-open");
    searchInput.focus();
  }
});
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  if (query) renderSearch(query);
  else if (screen.type === "search") {
    breadcrumbCurrent.textContent = "Search";
    appContent.innerHTML = `<div class="eyebrow">TOPIC LIBRARY</div><div class="unit-header"><span class="class-badge badge-one">⌕</span><div><h1>Search topics</h1><p>Type a topic, skill or class in the search box above.</p></div></div>`;
  }
});
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    searchInput.value = "";
    searchInput.blur();
    if (screen.type === "search") renderHome();
  }
});
document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchBox.classList.add("search-open");
    searchInput.focus();
  }
});

renderHome();

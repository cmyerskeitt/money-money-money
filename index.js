function calculateYears(principal, interest, tax, desired) {
    let years = 0 
    while (principal < desired){
    let gains = principal * interest - (principal * interest * tax)
      principal += gains
      years++
    }
    return years
}
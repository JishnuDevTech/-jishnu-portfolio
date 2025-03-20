import Foundation

print("Enter a year:")
if let input = readLine(), let year = Int(input) {
    if (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0) {
        print("\(year) is a Leap Year! 🎉")
    } else {
        print("\(year) is NOT a Leap Year. ❌")
    }
} else {
    print("Invalid input! Please enter a valid year. 🔢")
}

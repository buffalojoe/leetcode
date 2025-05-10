def plusOne(digits):
        strDigit = ''.join(str(digit) for digit in digits)
        strDigit = int(strDigit) + 1
        strDigit = str(strDigit)

        return [int(item) for item in strDigit]
        
digits = [5, 4, 6]
print(plusOne(digits))
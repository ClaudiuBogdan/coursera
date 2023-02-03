totalValues = int(input())
inputLine = input()
arr = inputLine.split()

# Init max value and second max value

maxValue = arr[0] if arr[0] > arr[1] else arr[1]
secondMaxValue = arr[0] if arr[0] < arr[1] else arr[1]

# Loop through the array and find the max and second max value
for i in range(2, totalValues):
    val = int(arr[i])
    if val > int(maxValue):
        secondMaxValue = maxValue
        maxValue = val
    elif val > int(secondMaxValue):
        secondMaxValue = val


maxProduct = int(maxValue) * int(secondMaxValue)

print(maxProduct)

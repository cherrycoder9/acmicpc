package main

import "fmt"

func main() {
	// 시스템에서 값을 하나 입력받고 거기에서 543을 뺀다
	var num int
	_, err := fmt.Scan(&num)
	if err != nil {
		return
	}
	result := num - 543
	fmt.Println(result)
}

package main

import "fmt"

func main() {
	// 테스트 케이스 개수 입력
	var t int
	fmt.Scan(&t)

	// 크기가 t인 int 타입의 슬라이스 생성
	// 슬라이스: Go 언어에서 동적 배열을 다룰 때 사용하는 기본적인 자료구조
	// 배열과 비슷하지만 크기가 가변적이고 더 유연함
	// make는 슬라이스, 맵, 채널 등의 자료구조를 초기화할때 사용하는 Go언어 내장 함수
	results := make([]int, t)

	for i := 0; i < t; i++ {
		var a, b int
		fmt.Scan(&a, &b)

		lastComputer := 1
		if b > 0 {
			// a^b의 마지막 자리 계산
			for j := 0; j < b; j++ {
				lastComputer = (lastComputer * a) % 10
			}
		}
		if lastComputer == 0 {
			lastComputer = 10
		}
		results[i] = lastComputer
	}

	// 결과 출력
	for _, result := range results {
		fmt.Println(result)
	}
}

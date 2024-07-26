fn main() {
    // let text = "Hello, world!";

    // let array: [usize; 4] = [1, 2, 3, 4];
    // println!("{}", array[0])

    // let tuple = (true, 2, 3.0);
    // println!("{}", tuple.0); // true
    // println!("{}", tuple.1); // 2
    // println!("{}", tuple.2); // 3.0

    // enum CardinalDirection {
    //     North,
    //     East,
    //     South,
    //     West,
    // }

    // let d = CardinalDirection::East;

    // if let CardinalDirection::East = d {
    //     println!("We are going east!");
    // } else {
    //     println!("We are not going east but in some other direction!");
    // }

    // let _val = 10;
    // let _va = &_val;
    // println!("{}", _va);
    

    // let first_name = false;

    // if first_name {

    //     println!("{}", first_name);
    // } else {
    //     println!("{}", !first_name);
        
    // }

    // let mut count = 10;

    // loop {
    //     if count == 0 {
    //         break;
    //     }
    //     println!("{count}...");
    //     count -=1;
    // }
    // println!("LIFTOFF!!!")

    for i in (-1..=10).rev() {

        if i % 2 == 0 {
            continue;
        }
        println!("{i}...");
    }

}

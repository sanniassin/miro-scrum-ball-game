# Scrum ball game

Scrum ball game for miro.

[Offline game description](https://www.plays-in-business.com/ball-point-game-introducing-agile-by-the-fun-way/)


Game features
* works with miro
* can be played with 2+ players

## Installation
For installing scrum ball game as web plugin, please use this url:
```https://miro.com/oauth/authorize/?response_type=code&client_id=3074457352753106105&redirect_uri=https%3A%2F%2Fega-forever.github.io%2Fmiro-scrum-ball-game%2Fauth-success.html```

## Running game
To run game, click on darts icon (in bottom bar). The game should create 3 buckets:
1) green - source bucket, from which you can obtain a ball
2) yellow - the target bucket (where the ball should be put, once everyone will touch it)
3) purple - the draw bucket. If ball has been loosed, it will be moved automatically to the draw bucket

## Roles
There are 2 roles: developer and PO (product owner)
1) PO: this person is response for passing balls from source bucket to developers. He can do this by moving blue ball on deveoper's sticker
2) developer: each developer has his own sticker (with written name on it). The ball should be moved between stickers.

## Rules
1) Only PO can move balls from source bucket to developer's sticker
2) Only the sticker owner (the owner's developer name should be written on the sticker) can move ball from his sticker to another sticker
3) Each time a new developer touch the ball (the ball moves to a new sticker) - the count of touches on the ball is updated
4) Once all developers touched the ball, any developer can move the ball to target bucket
5) The developer's sticker can hold only one ball at a time!

## How to play?
1) run the game
2) add timer and count down 2 minutes
3) ask the team (PO + developers) to put as much balls as they can into the target bucket in 2 minutes
4) after 2 minutes - stop the team, check how much balls reached the target bucket and draw bucket, make retrospective
5) click on darts button again to reset results
6) start the game again
7) the result should be better this time (as team should adopt their workflow)

## How to restart game
To restart the game, simply remove all generated primitives from board, 
or press the dart's button again. If you were PO - then all board will be cleared, 
if you were a developer - then only your card.

## If you closed/reload the browser during the game
If the game has already started, and you reconnected - then you can press the dart's button 
in order to enter the game.

# License

[GNU AGPLv3](LICENSE)

# Copyright

Copyright (c) 2020-2021 Egor Zuev

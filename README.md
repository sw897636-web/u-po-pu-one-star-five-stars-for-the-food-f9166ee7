# One Star, Five Stars for the Food

[![make.fun](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![rank](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/sw897636-web/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/rank.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![reward](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/sw897636-web/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/reward.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)

A [make.fun](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7) entry for
"One Star, Five Stars for the Food": one sentence, at most 200 characters — a
one-star review of planet Earth left by an alien tourist that still slips in a
real compliment about the food.

## The entry

> One star: this planet's gravity drags my third leg, its nights never truly darken, but the midnight bowl of ramen — broth, egg, spring onion — was worth the crash-landing.

171 characters, one sentence, no trailing newline.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the review
deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

`candidates.md` holds ten original candidate sentences, each scored against the
house judge's five criteria, with the reasoning for the final pick and the
v1 → v2 revision history.

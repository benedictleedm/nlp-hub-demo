const examples: Record<string, any>[] = [{
    display:
      "[sadness] David , why didn ' t you clean the room ? I ' m not in the mood . ... ",
    utterances: [
      {
        key: 0,
        utterance: "David , why didn ' t you clean the room ?",
      },
      {
        key: 1,
        utterance: "I ' m not in the mood .",
      },
      {
        key: 2,
        utterance: "Why are you feeling depressed ?",
      },
      {
        key: 3,
        utterance: "I was told my girlfriend was speaking ill of me .",
      },
      {
        key: 4,
        utterance: "That ' s a real let-down .",
      },
    ],
    target_utterance_emotion: "sadness",
  },
  {
    display:
      "[surprise] Our company's wei-ya is tomorrow night ! Excited ? ...",
    utterances: [
      {
        key: 0,
        utterance:
          "Our company's wei-ya is tomorrow night ! It's your first Chinese New Year in Taiwan--you must be excited !",
      },
      {
        key: 1,
        utterance:
          "Excited ? What's there to be excited about ? It's just another company dinner , right ?",
      },
      {
        key: 2,
        utterance:
          "You have no idea ! There's a banquet with prizes , performances ... you name it !",
      },
      {
        key: 3,
        utterance: "Really ? What kind of prizes ?",
      },
      {
        key: 4,
        utterance:
          "Well , I heard that last year Vivian from accounting won a new car !",
      },
      {
        key: 5,
        utterance: "A new car ! You're kidding !",
      },
    ],
    target_utterance_emotion: "surprise",
  },
  {
    display:
      "[happiness] It's very thoughtful of you to invite me to your wedding . ...",
    utterances: [
      {
        key: 0,
        utterance: "It's very thoughtful of you to invite me to your wedding .",
      },
      {
        key: 1,
        utterance: "How can I forget my old friend ?",
      },
      {
        key: 2,
        utterance: "My best wishes to you and the bride !",
      },
      {
        key: 3,
        utterance: "Thank you very much .",
      },
    ],
    target_utterance_emotion: "happiness",
  },
  {
    display: "[anger] Look what you've done ! I'm very sorry , sir . ...",
    utterances: [
      {
        key: 0,
        utterance: "Look what you've done !",
      },
      {
        key: 1,
        utterance:
          "I'm very sorry , sir . I'll bring you a cloth immediately .",
      },
      {
        key: 2,
        utterance: "Yes , and hurry up !",
      },
      {
        key: 3,
        utterance:
          "I'd like to apologize for my carelessness . May I clean it up for you ?",
      },
      {
        key: 4,
        utterance: "No , I'll do it myself .",
      },
      {
        key: 5,
        utterance:
          "Here is my card , sir . Could you send me the cleaning bill and I will refund the cost to you ?",
      },
      {
        key: 6,
        utterance: "I should think so , too !",
      },
      {
        key: 7,
        utterance: "I'm very sorry to have caused you this trouble .",
      },
      {
        key: 8,
        utterance: "Yes , and please be more careful in the future !",
      },
    ],
    target_utterance_emotion: "anger",
  },

  {
    display: "[fear] Dad , I'm scared . Take it easy , honey . ...",
    utterances: [
      {
        key: 0,
        utterance: "Dad , I'm scared .",
      },
      {
        key: 1,
        utterance: "Take it easy , honey .",
      },
      {
        key: 2,
        utterance: "It's just raining cats and dogs .",
      },
      {
        key: 3,
        utterance: "But , dad , it's stormy outside .",
      },
      {
        key: 4,
        utterance: "Honey , it's just windy and raining outside .",
      },
      {
        key: 5,
        utterance: "Ar ! Dad , the power went out .",
      },
    ],
    target_utterance_emotion: "fear",
  },
  {
    display: "[disgust] You look like a basket case . I'm not surprised . ...",
    utterances: [
      {
        key: 0,
        utterance: "You look like a basket case .",
      },
      {
        key: 1,
        utterance: "I'm not surprised .",
      },
      {
        key: 2,
        utterance: "What's the problem ?",
      },
      {
        key: 3,
        utterance: "My brother in-law just dropped in from the states .",
      },
      {
        key: 4,
        utterance: "Yeah , and ?",
      },
      {
        key: 5,
        utterance: "I decided to put him up while he's here , big mistake !",
      },
      {
        key: 6,
        utterance: "Why ?",
      },
      {
        key: 7,
        utterance:
          "He's lazy . I tried being a good host , but if you give him an inch , he'll take a mile .",
      },
    ],
    target_utterance_emotion: "disgust",
  },
]

export default examples;
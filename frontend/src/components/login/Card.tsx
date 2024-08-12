import React from 'react'

import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
import styles from './login.module.css'

type Props = {}

// TODO: 1.Animated Form Elements: Add animations to the form elements. For example, when a user successfully completes a field, have a small celebratory animation like confetti or a thumbs-up.

// TODO: 2.Randomized Field Labels: Occasionally change the labels of the fields to something silly or random, but make sure the correct field is still indicated. For instance, “Email” could become “Magical Communication Address.”

// TODO: 3.Whimsical Error Messages: Instead of standard error messages, use humorous or playful messages. For example, “Oops, looks like you forgot to enter a password! Did your cat walk on your keyboard?”

// TODO: 4.A checkbox that unchecks itself randomly, requiring multiple attempts to submit the form or that appears and disappears immediately.

// TODO: 5.Unexpected Sounds or Visuals: Integrate unexpected sound effects or visual changes when users interact with the form. For example, a funny sound effect when clicking a button or a visual change when a field is correctly filled.

// TODO: 6.A progress bar that goes back and forth as the user fills out the form or the width increases and the progress doesn't increase.

// TODO: 7.A "show password" feature that replaces the password with emojis.

// TODO: 8.A deliberately slow-loading form with a fake "turbo mode" button that doesn't actually do anything.

// TODO: 9.Form submission button that becomes transparent when the mouse hovers over it and another button somewhere else shows but the actual button is still in the normal position.

export default function Card({}: Props) {
  return (
    <section className={`${styles['card--container']} p-10  bg-bgsecondary`}>
      <LeftContainer />
      <RightContainer />
    </section>
  )
}

export function formDataToObjectFront<T>(form: HTMLFormElement): T {
  const formData = new FormData(form)
  const object: Record<string, unknown> = {}
  formData.forEach((value, key) => {
    object[key] = value
  })
  return object as T
}

export function formDataToObject<T>(formData: FormData): T {
  let object: Record<string, unknown> = {}
  for (let [key, value] of formData.entries()) {
    if (!key.includes("$ACTION_ID")) {
      object[key] = value
    }
  }
  return object
}

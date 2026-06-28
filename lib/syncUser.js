export const syncUserToDB = async (
  session
) => {
  try {

    console.log(
      "🚀 Sending User Sync"
    );

    const response =
      await fetch(
        "http://localhost:5000/api/users/sync",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            authUserId:
              session.user.id,
            name:
              session.user.name,
            email:
              session.user.email,
            image:
              session.user.image,
            role:
              session.user.role,
          }),
        }
      );

    const data =
      await response.json();

    console.log(
      "✅ Sync Response:",
      data
    );

  } catch (error) {

    console.log(
      "❌ Frontend Sync Error:",
      error
    );

  }
};
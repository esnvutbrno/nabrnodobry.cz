<template>
  <footer class="bg-primary text-gray-200 min-h-36 flex items-center p-8">
    <div class="
        max-w-4xl mx-auto w-full flex flex-col md:flex-row
        justify-between items-center gap-4
      ">
      <ul class="flex flex-col gap-1">
        <li>
          <a
            class="flex flex-row gap-2 items-center hover:underline"
            href="https://t.me/thejoeejoee"
            target="_blank"
          >
            <svg class="fill-white"
                 height="24" viewBox="0 0 512 512" width="24"
                 xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(0 -1)">
                <path d="M504.233,6.244c-5.695-4.828-13.841-6.8-22.394-2.912L12.506,216.665c-16.337,7.426-16.764,30.477-0.713,38.502
			l145.331,72.666l-7.767,163.239c-0.858,18.029,19.667,28.91,34.107,18.082l78.318-58.726l40.67,54.494
			c10.136,13.582,31.299,10.491,37.128-5.422L511.358,30.573C515.039,20.522,511.111,11.419,504.233,6.244z M392.393,90.856
			L233.58,249.669l-45.937,45.72L70.87,237.003L392.393,90.856z M194.13,447.828l3.938-82.764l38.194,51.172L194.13,447.828z
			 M313.074,447.819l-92.868-124.435l43.527-43.527l174.484-173.664L313.074,447.819z"/>
              </g>
            </svg>
            <span>like it or found bug?</span>
          </a>
        </li>
        <li class="flex flex-row gap-2 items-center">
          <svg class="fill-white"
               height="24" viewBox="0 0 512 512" width="24"
               xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M511.959,185.212L512,15.045l-67.587,67.587l-7.574-7.574c-48.332-48.332-112.594-74.95-180.946-74.95
			C114.792,0.107,0,114.901,0,256s114.792,255.893,255.893,255.893S511.785,397.099,511.785,256h-49.528
			c0,113.79-92.575,206.365-206.365,206.365S49.528,369.79,49.528,256S142.103,49.635,255.893,49.635
			c55.124,0,106.947,21.465,145.925,60.443l7.574,7.574l-67.58,67.58L511.959,185.212z"/>
            <polygon
              points="255.893,256 255.893,165.199 206.365,165.199 206.365,305.528 346.693,305.528 346.693,256 		"/>
          </svg>
          <span class="text-gray-200 text-sm font-mono">{{ time.toLocaleString() }}</span>
        </li>
        <li>
          <a
            class="flex flex-row gap-2 items-center hover:underline"
            href="https://github.com/esnvutbrno/nabrnodobry.cz"
            target="_blank"
          >
            <svg class="inline-block fill-white"
                 height="24" viewBox="0 0 24 24" width="24"
                 xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>
  open-sourced with love
</span>
          </a>
        </li>
      </ul>

      <div class="flex flex-row space-x-2">
        <ColorModeSwitcher/>
        <ThemeSwitcher/>
      </div>
      <span class="">
         © 2022
      </span>
      <img
        src="@/assets/svg/esn-bu-logo-white.svg"
        height="80" loading="lazy" width="144"
        alt="ESN Brno United"
        class="w-1/3 md:w-1/4 lg:w-1/5"
      >

    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({time: new Date()}),
  fetch() {
    // this.time = new Date();
  }
}
</script>

<style scoped>

</style>

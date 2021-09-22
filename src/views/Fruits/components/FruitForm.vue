<template>
  <form @submit.prevent="createFruit">
    <form-input v-model="formData.id" label="ID" :error="isIdInvalid" />
    <form-input v-model="formData.name" label="Name" :error="isNameInvalid" />
    <form-input
      v-model="formData.description"
      label="Description"
      :error="isDescriptionInvalid"
    />
    <label>
      Image:
      <select v-model="formData.image">
        <option
          v-for="image in FRUIT_IMAGES_AVAILABLE"
          :value="image"
          :key="image"
        >
          {{ image }}
        </option>
      </select>
    </label>
    <pre v-if="isImageInvalid">{{ isImageInvalid }}</pre>
    <form-input v-model="formData.link" label="Link" :error="isLinkInvalid" />
    <button type="button" @click="fillForm()">Fill</button>
    <button type="button" @click="clearForm()">Clear</button>
    <button type="submit">Create</button>
  </form>
</template>

<script>
import FormInput from '../../../components/FormInput.vue';

const URL_CHECK_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

export default {
  components: { FormInput },
  name: 'FruitForm',
  data: () => ({
    formData: {
      id: '',
      name: '',
      description: '',
      image: null,
      link: ''
    }
  }),
  computed: {
    isIdInvalid() {
      return Number.isInteger(parseInt(this.formData.id))
        ? ''
        : 'Escriba un número válido para el ID';
    },
    isNameInvalid() {
      return this.formData.name.length > 2
        ? ''
        : 'Escriba un nombre de al menos 3 letras';
    },
    isDescriptionInvalid() {
      return this.formData.description.length ? '' : 'Escriba una descripción';
    },
    isImageInvalid() {
      return this.formData.image?.length
        ? this.FRUIT_IMAGES_AVAILABLE.includes(this.formData.image)
          ? ''
          : 'Selecciona una image válida'
        : 'Selecciona una imagen de la lista';
    },
    isLinkInvalid() {
      return this.formData.link.length
        ? URL_CHECK_REGEX.test(this.formData.link)
          ? ''
          : 'Escribe un enlace válido'
        : '';
    },
    isFormValid() {
      return (
        !this.isIdInvalid &&
        !this.isNameInvalid &&
        !this.isDescriptionInvalid &&
        !this.isLinkInvalid
      );
    }
  },
  methods: {
    createFruit() {
      if (this.isFormValid) {
        this.$emit('create', this.formData);
        this.clearForm();
      }
    },
    fillForm() {
      this.formData = {
        id: 99,
        name: 'Plátano de Canarias',
        description: 'La mejor fruta hoy día',
        image: 'banana.png',
        link: 'https://platanodecanarias.es'
      };
    },
    clearForm() {
      this.formData = {
        id: '',
        name: '',
        description: '',
        image: null,
        link: ''
      };
    }
  },
  created() {
    this.FRUIT_IMAGES_AVAILABLE = [
      'apple.png',
      'banana.png',
      'grapes.png',
      'lemon.png',
      'orange.png',
      'pear.png',
      'pineapple.png',
      'strawberry.png',
      'watermelon.png'
    ];
  }
};
</script>

<style lang="scss" scoped>
form {
  text-align: left;

  form-input,
  label {
    margin: 8px;
  }

  button {
    margin: 8px;

    & + button {
      margin-left: 16px;
    }
  }

  pre {
    color: red;
    margin: 0 8px;
  }
}
</style>

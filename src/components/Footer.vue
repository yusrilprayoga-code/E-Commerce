<template>
    <div class="footer mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h3>Footer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </div>
                <div class="col-md-4">
                    <h3>Footer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </div>
                <div class="col-md-4">
                    <h3>Footer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Footer',
    data() {
        return {
            title: 'Footer'
        }
    }
}
</script>

<style>
    .footer {
        background-color: grey;
        padding: 50px 0;
    }
</style>
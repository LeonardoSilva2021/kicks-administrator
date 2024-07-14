import { Grid } from "@mantine/core"
import { useFormLoginStyles } from "./form-login-styles"
import { InputKikcs } from "../../controles/input-kicks/input-kicks";
import { CheckboxKicks } from "../../controles/checkbox-kicks/checkbox-kicks";
import { ArrowRightIcon } from "../../icons/arrow-right/arrow-right-icon";
import { Controller, useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { FormLoginModel } from "../../../../models/app/forms/login/form-login-model";
import { ButtonKicks } from "../../controles";
import { useLoginService } from "../../../../services/app/login-service";
import { LoaderKicks } from "../../controles/loader-kicks/loader-kicks";
import { useFormLoginValidation } from "./form-login-validation";
import { yupResolver } from '@hookform/resolvers/yup';
import { InputPasswordKicks } from "../../controles/input-password-kicks/input-password-kicks";

export const FormLogin = () => {

    //AUX
    const classes = useFormLoginStyles();

    //HOOKS
    const { login, carregando } = useLoginService();
    
    //SATTES
    const [model, setModel] = useState<FormLoginModel>(new FormLoginModel());
    
    //VALIDATION
    const { FormLoginValidation } = useFormLoginValidation();

    const {
        control,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm<FormLoginModel>({
        defaultValues: {...model},
        resolver: yupResolver(FormLoginValidation),
        criteriaMode: 'all',
        mode: "onChange"
    });

    const onSubmit = useCallback(async (newModel: FormLoginModel) => {
        await login(newModel);
    }, [login]);

    return (
        <>
            {carregando ? <LoaderKicks /> : null}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid className={classes.container}>
                    <Grid.Col span={12}>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) =>
                                <InputKikcs
                                    size="md"
                                    placeholder="Email"
                                    {...field}
                                    error={errors.email ? errors.email?.message : undefined}
                                />
                            }
                        />
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Controller
                            name="senha"
                            control={control}
                            render={({ field }) =>
                                <InputPasswordKicks
                                    size="md"
                                    placeholder="Senha"
                                    error={errors.senha ? errors.senha?.message : undefined}
                                    {...field}
                                />
                            }
                        />
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Controller
                            name="continuarConectado"
                            control={control}
                            render={({ field }) =>
                                <CheckboxKicks
                                    label="Keep me logged in - applies to all log in options below. More info"
                                    color="#000"
                                    onClick={() => {
                                        const novoModel = model;
                                        novoModel.continuarConectado = !model.continuarConectado;
                                        setModel(model)
                                    }}
                                    {...field}
                                />
                            }
                        />
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <ButtonKicks
                            variant="outline"
                            size="md"
                            fullWidth
                            radius="md"
                            justifly="space-between"
                            color="#000"
                            rightSection={<ArrowRightIcon />}
                        >
                            SIGN UP
                        </ButtonKicks>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <ButtonKicks
                            type="submit"
                            size="md"
                            fullWidth
                            radius="md"
                            justifly="space-between"
                            color="#000"
                            rightSection={<ArrowRightIcon fill="#FFF" />}
                        >
                            EMAIL LOGIN
                        </ButtonKicks>
                    </Grid.Col>
                </Grid>
            </form>
        </>
    )
}